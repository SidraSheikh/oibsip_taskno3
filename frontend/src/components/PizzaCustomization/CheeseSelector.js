// src/components/PizzaCustomization/CheeseSelector.js
import React from "react";

const CheeseSelector = ({ selectedCheese, setSelectedCheese, cheeses }) => {
  return (
    <div className="selector-container">
      <h2>Select Cheese</h2>
      <select
        value={selectedCheese}
        onChange={(e) => setSelectedCheese(e.target.value)}
      >
        {cheeses.map((cheese) => (
          <option key={cheese.id} value={cheese.name}>
            {cheese.name} - ₹{cheese.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CheeseSelector;
