// src/components/PizzaCustomization/OrderSummary.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./orderSummary.css";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {}; // Get item from location.state

  if (!item) {
    return <p>No item selected for the order summary.</p>;
  }

  const handleCheckout = () => {
    // Navigate to PaymentComponent with the total price
    navigate("/dashboard/payment", { state: { amount: item.price } });
  };

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <p>Pizza: {item.name}</p>
      <p>Base: {item.selectedBase}</p>
      <p>Sauce: {item.selectedSauce}</p>
      <p>Cheese: {item.selectedCheese}</p>
      <p>Veggies: {item.selectedVeggies.join(", ")}</p>
      <p>Total Price: ₹{item.price}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default OrderSummary;
