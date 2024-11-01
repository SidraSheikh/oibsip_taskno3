// src/components/PizzaCustomization/SauceSelector.js
import React from "react";

const SauceSelector = ({ selectedSauce, setSelectedSauce, sauces }) => {
  return (
    <div className="selector-container">
      <h2>Select Sauce</h2>
      <select
        value={selectedSauce}
        onChange={(e) => setSelectedSauce(e.target.value)}
      >
        {sauces.map((sauce) => (
          <option key={sauce.id} value={sauce.name}>
            {sauce.name} - ₹{sauce.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SauceSelector;
