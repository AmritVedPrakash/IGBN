import React from "react";
import { RotateCcw } from "lucide-react";
import { states } from  "../../../../../data/stateData";

export default function StateFilters({
  selectedState,
  selectedProduct,
  onStateChange,
  onProductChange,
}) {
  const currentState =
    states.find((item) => item.code === selectedState) || states[0];

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
        {/* State */}

        <div>
          <label className="mb-1.5 block text-[16px] text-[#7F909F]">
            Select a State
          </label>

          <select
            value={selectedState}
            onChange={(e) => onStateChange(e.target.value)}
            className="
              h-[38px]
              w-full
              rounded-[5px]
              border
              border-[#284056]
              bg-[#071522]
              px-3
              text-[16px]
              text-[#DDE3E7]
              outline-none
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

        {/* Product */}

        <div>
          <label className="mb-1.5 block text-[16px] text-[#7F909F]">
            Select a Product
          </label>

          <select
            value={selectedProduct}
            onChange={(e) => onProductChange(e.target.value)}
            className="
              h-[38px]
              w-full
              rounded-[5px]
              border
              border-[#284056]
              bg-[#071522]
              px-3
              text-[16px]
              text-[#DDE3E7]
              outline-none
              focus:border-[#D69A2B]
            "
          >
            {currentState.topProducts.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* Region */}

        <div>
          <label className="mb-1.5 block text-[16px] text-[#7F909F]">
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
            {currentState.region}
          </div>
        </div>

        {/* Reset */}

        <div className="flex items-end">
          <button
            type="button"
            onClick={() => {
              onStateChange("CA");
              onProductChange("Almonds");
            }}
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
