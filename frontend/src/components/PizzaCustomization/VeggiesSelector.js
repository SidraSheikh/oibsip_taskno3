// src/components/PizzaCustomization/VeggieSelector.js
import React from "react";

const VeggieSelector = ({ selectedVeggies, setSelectedVeggies, veggies }) => {
  const handleCheckboxChange = (veggieName) => {
    setSelectedVeggies((prev) =>
      prev.includes(veggieName)
        ? prev.filter((name) => name !== veggieName)
        : [...prev, veggieName]
    );
  };

  return (
    <div className="selector-container">
      <h2>Select Veggies</h2>
      {veggies.map((veggie) => (
        <label key={veggie.id}>
          <input
            type="checkbox"
            value={veggie.name}
            checked={selectedVeggies.includes(veggie.name)}
            onChange={() => handleCheckboxChange(veggie.name)}
          />
          {veggie.name} - ₹{veggie.price}
        </label>
      ))}
    </div>
  );
};

export default VeggieSelector;
