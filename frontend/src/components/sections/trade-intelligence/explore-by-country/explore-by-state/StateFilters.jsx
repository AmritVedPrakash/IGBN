import React, { useMemo } from "react";
import { RotateCcw } from "lucide-react";

export default function StateFilters({
  selectedState,
  selectedProduct,
  onStateChange,
  onProductChange,

  // StateIntelligence.jsx se dynamic states aayenge
  states = [],
}) {
  // =====================================================
  // CURRENT STATE
  // =====================================================

  const currentState = useMemo(() => {
    if (!states.length) {
      return null;
    }

    return (
      states.find(
        (item) =>
          String(item.code).toUpperCase() ===
          String(selectedState).toUpperCase(),
      ) || states[0]
    );
  }, [states, selectedState]);

  // =====================================================
  // AVAILABLE PRODUCTS
  // =====================================================

  const availableProducts = currentState?.topProducts || [];

  // =====================================================
  // RESET FILTERS
  // =====================================================

  const handleReset = () => {
    if (!states.length) {
      return;
    }

    const defaultState = states[0];

    if (!defaultState) {
      return;
    }

    onStateChange?.(defaultState.code);

    onProductChange?.(
      defaultState.selectedProduct || defaultState.topProducts?.[0] || "",
    );
  };

  // =====================================================
  // STATE CHANGE
  // =====================================================

  const handleStateChange = (event) => {
    const newStateCode = event.target.value;

    const nextState = states.find(
      (item) =>
        String(item.code).toUpperCase() === String(newStateCode).toUpperCase(),
    );

    // StateIntelligence bhi selected product update karta hai,
    // but yaha immediate UI sync ke liye bhi update kar dete hain.
    if (nextState) {
      onProductChange?.(
        nextState.selectedProduct || nextState.topProducts?.[0] || "",
      );
    }

    onStateChange?.(newStateCode);
  };

  // =====================================================
  // PRODUCT CHANGE
  // =====================================================

  const handleProductChange = (event) => {
    onProductChange?.(event.target.value);
  };

  // =====================================================
  // NO STATES AVAILABLE
  // =====================================================

  if (!states.length) {
    return (
      <div
        className="
          rounded-[8px]
          border
          border-[#193249]
          bg-[#03111F]
          p-4
        "
      >
        <p className="text-[13px] text-[#7F909F]">
          No state intelligence data available for this country.
        </p>
      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-3
        sm:p-4
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-3
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {/* =================================================
            STATE
        ================================================= */}

        <div>
          <label
            className="
              mb-1.5
              block
              text-[16px]
              text-[#7F909F]
            "
          >
            Select a State
          </label>

          <select
            value={selectedState || ""}
            onChange={handleStateChange}
            className="
              h-[38px]
              w-full
              cursor-pointer
              rounded-[5px]
              border
              border-[#284056]
              bg-[#071522]
              px-3
              text-[16px]
              text-[#DDE3E7]
              outline-none
              transition
              focus:border-[#D69A2B]
            "
          >
            {states.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* =================================================
            PRODUCT
        ================================================= */}

        <div>
          <label
            className="
              mb-1.5
              block
              text-[16px]
              text-[#7F909F]
            "
          >
            Select a Product
          </label>

          <select
            value={selectedProduct || ""}
            onChange={handleProductChange}
            disabled={!availableProducts.length}
            className="
              h-[38px]
              w-full
              cursor-pointer
              rounded-[5px]
              border
              border-[#284056]
              bg-[#071522]
              px-3
              text-[16px]
              text-[#DDE3E7]
              outline-none
              transition
              focus:border-[#D69A2B]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {!availableProducts.length && (
              <option value="">No Products Available</option>
            )}

            {availableProducts.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* =================================================
            REGION
        ================================================= */}

        <div>
          <label
            className="
              mb-1.5
              block
              text-[16px]
              text-[#7F909F]
            "
          >
            Region
          </label>

          <div
            className="
              flex
              h-[38px]
              items-center
              rounded-[5px]
              border
              border-[#284056]
              bg-[#071522]
              px-3
              text-[16px]
              text-[#DDE3E7]
            "
          >
            {currentState?.region || "No Data"}
          </div>
        </div>

        {/* =================================================
            RESET
        ================================================= */}

        <div className="flex items-end">
          <button
            type="button"
            onClick={handleReset}
            className="
              flex
              h-[38px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-[5px]
              border
              border-[#284056]
              bg-[#071522]
              text-[16px]
              font-medium
              text-[#8998A5]
              transition
              hover:border-[#D69A2B]
              hover:text-[#D69A2B]
            "
          >
            <RotateCcw size={15} />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
