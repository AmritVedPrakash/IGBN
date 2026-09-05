import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

/*
=========================================================
COUNTRY STATE MAP - LEAFLET VERSION
=========================================================

Required props:

countryIso3
Example:
USA
IND
CAN
AUS

countryName
Example:
United States
India
Canada

selectedState
Example:
CA
TX
MH
DL

onStateChange
Example:
onStateChange("TX")

states
Example:
[
  {
    code: "CA",
    name: "California",
    impact: "Moderate"
  }
]

=========================================================
*/

/*
=========================================================
STATE NAME ALIASES
=========================================================
*/

const STATE_NAME_ALIASES = {
  // ==========================
  // INDIA
  // ==========================

  delhi: "DL",
  nctofdelhi: "DL",

  odisha: "OD",
  orissa: "OD",

  uttarakhand: "UK",
  uttaranchal: "UK",

  // ==========================
  // USA
  // ==========================

  districtofcolumbia: "DC",
  washingtondc: "DC",
};

/*
=========================================================
NORMALIZE NAME
=========================================================
*/

function normalizeName(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");
}

/*
=========================================================
GET GEOJSON STATE NAME
=========================================================
*/

function getFeatureName(feature) {
  const properties =
    feature?.properties || {};

  return (
    // INDIA
    properties.ST_NM ||
    properties.st_nm ||
    properties.State_Name ||
    properties.STATE_NAME ||

    // geoBoundaries
    properties.shapeName ||

    // Other providers
    properties.name ||
    properties.NAME_1 ||
    properties.NAME ||
    properties.admin1Name ||
    properties.region ||

    ""
  );
}

/*
=========================================================
GET GEOJSON STATE CODE
=========================================================

Examples:

US-CA -> CA
US-TX -> TX
IN-MH -> MH
CA-ON -> ON

=========================================================
*/

function getFeatureCode(feature) {
  const properties =
    feature?.properties || {};

  /*
  India GeoJSON:

  ST_ID: "IN-DL"
  ID: "DL"

  USA:
  US-CA

  Canada:
  CA-ON
  */

  const rawCode =
    // INDIA
    properties.ID ||
    properties.ST_ID ||

    // geoBoundaries
    properties.shapeISO ||

    // Other providers
    properties.iso_3166_2 ||
    properties.ISO_3166_2 ||
    properties.ISO3166_2 ||
    properties.postal ||
    properties.code ||
    properties.state_code ||
    "";

  if (!rawCode) {
    return "";
  }

  const cleanCode =
    String(rawCode)
      .trim()
      .toUpperCase();

  /*
  DL -> DL

  IN-DL -> DL

  US-CA -> CA
  */

  const parts =
    cleanCode.split("-");

  return (
    parts[
      parts.length - 1
    ] || ""
  );
}

/*
=========================================================
IMPACT COLOR
=========================================================
*/

function getImpactColor(impact) {
  const normalizedImpact =
    String(
      impact || "",
    ).toLowerCase();

  /*
  LOW
  */

  if (
    normalizedImpact.includes(
      "low",
    ) ||
    normalizedImpact.includes(
      "minimal",
    )
  ) {
    return "#82A83D";
  }

  /*
  MODERATE
  */

  if (
    normalizedImpact.includes(
      "moderate",
    )
  ) {
    return "#D5A52F";
  }

  /*
  HIGH
  */

  if (
    normalizedImpact.includes(
      "high",
    )
  ) {
    return "#D9782B";
  }

  /*
  SEVERE
  */

  if (
    normalizedImpact.includes(
      "severe",
    )
  ) {
    return "#C94E4E";
  }

  /*
  NO DATA
  */

  return "#8B969F";
}

/*
=========================================================
COUNTRY BOUNDS CONTROLLER
=========================================================

Ye automatically:

USA -> USA ko fit karega
India -> India ko fit karega
Canada -> Canada ko fit karega

GeoJSON ke according map zoom set hoga.
=========================================================
*/

function CountryBoundsController({
  geoData,
}) {
  const map = useMap();

  useEffect(() => {
    if (!geoData) {
      return;
    }

    try {
      /*
      Temporary Leaflet GeoJSON layer
      only to calculate bounds
      */

      const layer =
        L.geoJSON(geoData);

      const bounds =
        layer.getBounds();

      if (!bounds.isValid()) {
        return;
      }

      /*
      Fit selected country
      */

      map.fitBounds(bounds, {
        padding: [20, 20],
        animate: false,
      });

      /*
      User ko country se bahut
      door pan karne se restrict karo
      */

      const restrictedBounds =
        bounds.pad(0.3);

      map.setMaxBounds(
        restrictedBounds,
      );
    } catch (error) {
      console.error(
        "CountryBoundsController:",
        error,
      );
    }
  }, [geoData, map]);

  return null;
}

/*
=========================================================
LEAFLET MAP RESIZE FIX
=========================================================

Kabhi-kabhi grid/absolute parent ke andar
Leaflet size initially wrong calculate karta hai.

invalidateSize() usko fix karta hai.
=========================================================
*/

function MapResizeFix() {
  const map = useMap();

  useEffect(() => {
    const timer =
      setTimeout(() => {
        map.invalidateSize();
      }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [map]);

  return null;
}

/*
=========================================================
MAIN COMPONENT
=========================================================
*/

export default function CountryStateMap({
  countryIso3 = "USA",

  countryName = "United States",

  selectedState,

  onStateChange,

  states = [],
}) {
  // =====================================================
  // STATE
  // =====================================================

  const [
    geoData,
    setGeoData,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  // =====================================================
  // LOAD COUNTRY GEOJSON
  // =====================================================
  //
  // IMPORTANT
  //
  // GeoJSON local public folder se load hoga:
  //
  // public/maps/USA-ADM1.geojson
  // public/maps/IND-ADM1.geojson
  // public/maps/CAN-ADM1.geojson
  //
  // Remote Github fetch nahi hoga.
  //
  // Isliye CORS problem nahi hogi.
  // =====================================================

  useEffect(() => {
    if (!countryIso3) {
      setGeoData(null);

      setLoading(false);

      return;
    }

    let cancelled = false;

    async function loadCountryMap() {
      try {
        setLoading(true);

        setError("");

        setGeoData(null);

        const iso3 =
          String(
            countryIso3,
          ).toUpperCase();

        /*
        Vite BASE_URL support

        Usually:
        /
        */

        const baseUrl =
          import.meta.env.BASE_URL ||
          "/";

        /*
        USA:
        /maps/USA-ADM1.geojson
        */

        const mapUrl =
          `${baseUrl}maps/${iso3}-ADM1.geojson`;

        console.log(
          "Loading Leaflet country map:",
          mapUrl,
        );

        const response =
          await fetch(mapUrl);

        /*
        File not found
        */

        if (!response.ok) {
          throw new Error(
            `Map file not found: ${mapUrl}`,
          );
        }

        /*
        Parse GeoJSON
        */

        const json =
          await response.json();

        /*
        Validate
        */

        if (
          !json ||
          json.type !==
            "FeatureCollection" ||
          !Array.isArray(
            json.features,
          )
        ) {
          throw new Error(
            "Invalid GeoJSON map data",
          );
        }

        if (
          json.features.length === 0
        ) {
          throw new Error(
            "No state boundaries found in GeoJSON",
          );
        }

        if (!cancelled) {
          setGeoData(json);
        }
      } catch (err) {
        console.error(
          "CountryStateMap:",
          err,
        );

        if (!cancelled) {
          setError(
            err?.message ||
              "Unable to load country map",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadCountryMap();

    return () => {
      cancelled = true;
    };
  }, [countryIso3]);

  // =====================================================
  // STATE LOOKUP BY CODE
  // =====================================================
  //
  // CA => California data
  // TX => Texas data
  //
  // =====================================================

  const stateCodeLookup =
    useMemo(() => {
      const lookup = {};

      states.forEach((state) => {
        if (!state?.code) {
          return;
        }

        const code =
          String(
            state.code,
          ).toUpperCase();

        lookup[code] =
          state;
      });

      return lookup;
    }, [states]);

  // =====================================================
  // STATE LOOKUP BY NAME
  // =====================================================

  const stateNameLookup =
    useMemo(() => {
      const lookup = {};

      states.forEach((state) => {
        if (
          !state?.code ||
          !state?.name
        ) {
          return;
        }

        const normalizedName =
          normalizeName(
            state.name,
          );

        lookup[
          normalizedName
        ] = String(
          state.code,
        ).toUpperCase();
      });

      return lookup;
    }, [states]);

  // =====================================================
  // RESOLVE GEOJSON STATE -> APP STATE
  // =====================================================

  const resolveStateCode =
    useCallback(
      (feature) => {
        /*
        ===============================================
        1. TRY STATE ISO CODE
        ===============================================
        */

        const featureCode =
          getFeatureCode(
            feature,
          );

        if (
          featureCode &&
          stateCodeLookup[
            featureCode
          ]
        ) {
          return featureCode;
        }

        /*
        ===============================================
        2. TRY STATE NAME
        ===============================================
        */

        const featureName =
          getFeatureName(
            feature,
          );

        const normalizedName =
          normalizeName(
            featureName,
          );

        if (
          stateNameLookup[
            normalizedName
          ]
        ) {
          return stateNameLookup[
            normalizedName
          ];
        }

        /*
        ===============================================
        3. TRY ALIASES
        ===============================================
        */

        const aliasCode =
          STATE_NAME_ALIASES[
            normalizedName
          ];

        if (
          aliasCode &&
          stateCodeLookup[
            aliasCode
          ]
        ) {
          return aliasCode;
        }

        /*
        No data available
        */

        return "";
      },
      [
        stateCodeLookup,
        stateNameLookup,
      ],
    );

  // =====================================================
  // POLYGON STYLE
  // =====================================================

  const featureStyle =
    useCallback(
      (feature) => {
        const stateCode =
          resolveStateCode(
            feature,
          );

        /*
        Our state data
        */

        const stateData =
          stateCode
            ? stateCodeLookup[
                stateCode
              ]
            : null;

        /*
        Is selected?
        */

        const active =
          Boolean(stateCode) &&
          String(
            selectedState || "",
          ).toUpperCase() ===
            stateCode;

        /*
        State has intelligence data
        */

        const hasData =
          Boolean(stateData);

        /*
        Impact based color
        */

        const impactColor =
          hasData
            ? getImpactColor(
                stateData.impact,
              )
            : "#53616C";

        /*
        Selected state
        */

        if (active) {
          return {
            color: "#F2B63A",

            weight: 3,

            opacity: 1,

            fillColor:
              impactColor,

            fillOpacity:
              0.8,
          };
        }

        /*
        State with data
        */

        if (hasData) {
          return {
            color: "#7790A0",

            weight: 1.2,

            opacity: 1,

            fillColor:
              impactColor,

            fillOpacity:
              0.5,
          };
        }

        /*
        State without data
        */

        return {
          color: "#455B6B",

          weight: 1,

          opacity: 0.8,

          fillColor:
            "#253642",

          fillOpacity:
            0.32,
        };
      },
      [
        resolveStateCode,
        selectedState,
        stateCodeLookup,
      ],
    );

  // =====================================================
  // EACH STATE FEATURE
  // =====================================================

  const onEachFeature =
    useCallback(
      (feature, layer) => {
        /*
        GeoJSON state name
        */

        const featureName =
          getFeatureName(
            feature,
          );

        /*
        Find state code
        */

        const stateCode =
          resolveStateCode(
            feature,
          );

        /*
        Find intelligence data
        */

        const stateData =
          stateCode
            ? stateCodeLookup[
                stateCode
              ]
            : null;

        /*
        State click works only
        if data exists
        */

        const clickable =
          Boolean(
            stateCode &&
              stateData,
          );

        // ===============================================
        // TOOLTIP
        // ===============================================

        if (stateData) {
          layer.bindTooltip(
            `
              <div
                style="
                  min-width: 120px;
                  font-family: Arial, sans-serif;
                "
              >
                <div
                  style="
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 4px;
                    color: #111827;
                  "
                >
                  ${stateData.name}
                </div>

                <div
                  style="
                    font-size: 11px;
                    color: #4B5563;
                  "
                >
                  ${stateData.impact || "No Data"} Impact
                </div>

                <div
                  style="
                    margin-top: 4px;
                    font-size: 10px;
                    color: #6B7280;
                  "
                >
                  Click to view intelligence
                </div>
              </div>
            `,
            {
              sticky: true,

              direction: "top",

              opacity: 0.95,

              className:
                "country-state-tooltip",
            },
          );
        } else {
          layer.bindTooltip(
            `
              <div
                style="
                  min-width: 100px;
                  font-family: Arial, sans-serif;
                "
              >
                <div
                  style="
                    font-size: 12px;
                    font-weight: 600;
                    color: #111827;
                  "
                >
                  ${
                    featureName ||
                    "Unknown State"
                  }
                </div>

                <div
                  style="
                    margin-top: 3px;
                    font-size: 10px;
                    color: #6B7280;
                  "
                >
                  No intelligence data
                </div>
              </div>
            `,
            {
              sticky: true,

              direction: "top",

              opacity: 0.9,

              className:
                "country-state-tooltip",
            },
          );
        }

        // ===============================================
        // EVENTS
        // ===============================================

        layer.on({
          // ===========================
          // CLICK
          // ===========================

          click: () => {
            if (
              !clickable ||
              !stateCode
            ) {
              return;
            }

            onStateChange?.(
              stateCode,
            );
          },

          // ===========================
          // HOVER
          // ===========================

          mouseover: (
            event,
          ) => {
            const target =
              event.target;

            /*
            State without data
            */

            if (!clickable) {
              target.setStyle({
                color:
                  "#8195A3",

                weight: 1.5,

                fillOpacity:
                  0.45,
              });

              return;
            }

            /*
            Selected state?
            */

            const active =
              String(
                selectedState ||
                  "",
              ).toUpperCase() ===
              stateCode;

            /*
            Only change normal
            state hover
            */

            if (!active) {
              target.setStyle({
                color:
                  "#E7EEF3",

                weight: 2.4,

                fillOpacity:
                  0.75,
              });
            }

            /*
            Polygon bring to front
            */

            if (
              target.bringToFront
            ) {
              target.bringToFront();
            }
          },

          // ===========================
          // MOUSE OUT
          // ===========================

          mouseout: (
            event,
          ) => {
            event.target.setStyle(
              featureStyle(
                feature,
              ),
            );
          },
        });
      },
      [
        featureStyle,
        onStateChange,
        resolveStateCode,
        selectedState,
        stateCodeLookup,
      ],
    );

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div
        className="
          flex
          h-full
          min-h-[390px]
          w-full
          items-center
          justify-center
          bg-[#041522]
        "
      >
        <div className="text-center">
          <div
            className="
              mx-auto
              h-7
              w-7
              animate-spin
              rounded-full
              border-2
              border-[#29445A]
              border-t-[#D69A2B]
            "
          />

          <p
            className="
              mt-3
              text-[12px]
              text-[#718391]
            "
          >
            Loading{" "}
            {countryName ||
              countryIso3}{" "}
            map...
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (
    error ||
    !geoData
  ) {
    return (
      <div
        className="
          flex
          h-full
          min-h-[390px]
          w-full
          items-center
          justify-center
          bg-[#041522]
        "
      >
        <div
          className="
            max-w-[340px]
            rounded-[8px]
            border
            border-[#193249]
            bg-[#061623]
            px-5
            py-4
            text-center
          "
        >
          <p
            className="
              text-[13px]
              font-semibold
              text-[#DCE2E6]
            "
          >
            Map unavailable
          </p>

          <p
            className="
              mt-1
              text-[11px]
              leading-5
              text-[#718391]
            "
          >
            {error ||
              `Unable to load ${countryName} map.`}
          </p>

          <p
            className="
              mt-2
              text-[10px]
              leading-5
              text-[#526B7D]
            "
          >
            Expected map file:
            <br />

            /public/maps/
            {String(
              countryIso3,
            ).toUpperCase()}
            -ADM1.geojson
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // SELECTED STATE DATA
  // =====================================================

  const selectedStateData =
    stateCodeLookup[
      String(
        selectedState || "",
      ).toUpperCase()
    ];

  // =====================================================
  // LEAFLET MAP
  // =====================================================

  return (
    <div
      className="
        relative
        h-full
        min-h-[390px]
        w-full
        overflow-hidden
      "
    >
      <MapContainer
        /*
        Initial center doesn't matter much.
        CountryBoundsController immediately
        selected country ko fit karega.
        */

        center={[
          39.8283,
          -98.5795,
        ]}
        zoom={4}

        /*
        Zoom
        */

        minZoom={2}
        maxZoom={10}

        scrollWheelZoom={true}

        zoomControl={true}

        /*
        Restrict panning
        */

        maxBoundsViscosity={0.95}

        /*
        Don't repeat world
        */

        worldCopyJump={false}

        /*
        Leaflet container
        */

        className="
          h-full
          min-h-[390px]
          w-full
        "

        style={{
          height: "100%",
          minHeight: "390px",
          width: "100%",
          background:
            "#041522",
          zIndex: 1,
        }}
      >
        {/* ===============================================
            DARK BASE MAP
        =============================================== */}

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"

          attribution='&copy; OpenStreetMap contributors &copy; CARTO'

          noWrap={true}
        />

        {/* ===============================================
            RESIZE FIX
        =============================================== */}

        <MapResizeFix />

        {/* ===============================================
            COUNTRY AUTO FOCUS
        =============================================== */}

        <CountryBoundsController
          geoData={
            geoData
          }
        />

        {/* ===============================================
            STATES / PROVINCES
        =============================================== */}

        <GeoJSON
          /*
          Key is important.

          State select hone ke baad
          selected polygon styling refresh hogi.
          */

          key={`${countryIso3}-${selectedState}`}

          data={geoData}

          style={
            featureStyle
          }

          onEachFeature={
            onEachFeature
          }
        />
      </MapContainer>

      {/* =================================================
          SELECTED STATE BADGE
      ================================================= */}

      {selectedStateData && (
        <div
          className="
            pointer-events-none
            absolute
            bottom-3
            right-3
            z-[500]
            rounded-[6px]
            border
            border-[#765322]
            bg-[#111B21]/95
            px-3
            py-2
            shadow-[0_5px_20px_rgba(0,0,0,0.35)]
            backdrop-blur
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.08em]
              text-[#8B98A1]
            "
          >
            Selected
          </p>

          <div
            className="
              mt-1
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-2.5
                w-2.5
                rounded-full
              "
              style={{
                backgroundColor:
                  getImpactColor(
                    selectedStateData.impact,
                  ),
              }}
            />

            <p
              className="
                text-[12px]
                font-semibold
                text-[#E2E8EC]
              "
            >
              {
                selectedStateData.name
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}