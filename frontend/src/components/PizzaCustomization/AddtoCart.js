import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import BaseSelector from "./PizzaBaseSelector";
import SauceSelector from "./SauceSelector";
import CheeseSelector from "./CheeseSelector";
import VeggieSelector from "./VeggiesSelector";
import "./AddToCart.css";

const AddToCart = ({ addToCart }) => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { selectedPizza } = location.state;

  // State for selected customizations
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedSauce, setSelectedSauce] = useState(null);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [selectedVeggies, setSelectedVeggies] = useState([]);

  // Example data for customization options
  const bases = [
    { id: 1, name: "Thin Crust", price: 60 },
    { id: 2, name: "Thick Crust", price: 80 },
    { id: 3, name: "Cheese Burst", price: 100 }
  ];

  const sauces = [
    { id: 1, name: "Tomato", price: 30 },
    { id: 2, name: "Pesto", price: 40 }
  ];

  const cheeses = [
    { id: 1, name: "Mozzarella", price: 80 },
    { id: 2, name: "Cheddar", price: 70 }
  ];

  const veggies = [
    { id: 1, name: "Bell Peppers", price: 50 },
    { id: 2, name: "Onions", price: 40 }
  ];

  const calculateTotalPrice = () => {
    const basePrice = selectedBase
      ? bases.find((b) => b.name === selectedBase)?.price
      : 0;
    const saucePrice = selectedSauce
      ? sauces.find((s) => s.name === selectedSauce)?.price
      : 0;
    const cheesePrice = selectedCheese
      ? cheeses.find((c) => c.name === selectedCheese)?.price
      : 0;
    const veggiePrice = selectedVeggies.reduce(
      (acc, veg) => acc + veggies.find((v) => v.name === veg)?.price,
      0
    );

    return (
      selectedPizza.price + basePrice + saucePrice + cheesePrice + veggiePrice
    );
  };

  const handleAddToCart = () => {
    const item = {
      ...selectedPizza,
      selectedBase,
      selectedSauce,
      selectedCheese,
      selectedVeggies,
      price: calculateTotalPrice()
    };

    addToCart(item);

    // Navigate to Order Summary with cart item details
    navigate("/dashboard/order-summary", { state: { item } });
  };

  return (
    <div className="add-to-cart">
      <h2>{selectedPizza.name}</h2>
      <p>Base Price: ₹{selectedPizza.price}</p>

      {/* Render customization selectors */}
      <BaseSelector
        selectedBase={selectedBase}
        setSelectedBase={setSelectedBase}
        bases={bases}
      />
      <SauceSelector
        selectedSauce={selectedSauce}
        setSelectedSauce={setSelectedSauce}
        sauces={sauces}
      />
      <CheeseSelector
        selectedCheese={selectedCheese}
        setSelectedCheese={setSelectedCheese}
        cheeses={cheeses}
      />
      <VeggieSelector
        selectedVeggies={selectedVeggies}
        setSelectedVeggies={setSelectedVeggies}
        veggies={veggies}
      />

      <h3>Total Price: ₹{calculateTotalPrice()}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
