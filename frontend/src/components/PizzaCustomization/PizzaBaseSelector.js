// src/components/PizzaCustomization/BaseSelector.js
import React from "react";

const BaseSelector = ({ selectedBase, setSelectedBase, bases }) => {
  return (
    <div>
      <label>Choose a Base:</label>
      <select
        value={selectedBase}
        onChange={(e) => setSelectedBase(e.target.value)}
      >
        {bases.map((base) => (
          <option key={base.id} value={base.name}>
            {base.name} (+₹{base.price})
          </option>
        ))}
      </select>
    </div>
  );
};

export default BaseSelector;
