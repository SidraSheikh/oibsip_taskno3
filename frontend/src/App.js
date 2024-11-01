// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";
import PizzaBaseSelector from "./components/PizzaCustomization/PizzaBaseSelector";
import SauceSelector from "./components/PizzaCustomization/SauceSelector";
import CheeseSelector from "./components/PizzaCustomization/CheeseSelector";
import VeggiesSelector from "./components/PizzaCustomization/VeggiesSelector";
import OrderSummary from "./components/PizzaCustomization/OrderSummary";
import PaymentComponent from "./components/Payment/PaymentComponent";
import Dashboard from "./components/Dashboard";
import AddToCart from "./components/PizzaCustomization/AddtoCart";
import AdminDashboard from "./components/AdminDashboard.js";
import OrderManagement from "./components/Admin/OrderManagement";
import InventoryManagement from "./components/Admin/InventoryManagement";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Example pizza selection data
  const pizzaBases = [
    { id: 1, name: "Thin Crust", price: 5 },
    { id: 2, name: "Thick Crust", price: 6 },
    { id: 3, name: "Cheese Burst", price: 8 }
  ];

  const sauces = [
    { id: 1, name: "Tomato", price: 1 },
    { id: 2, name: "Pesto", price: 2 }
  ];

  const cheeses = [
    { id: 1, name: "Mozzarella", price: 2 },
    { id: 2, name: "Cheddar", price: 2 }
  ];

  const veggies = [
    { id: 1, name: "Bell Peppers", price: 0.5 },
    { id: 2, name: "Onions", price: 0.4 }
  ];

  const [selectedBase, setSelectedBase] = useState(pizzaBases[0].name);
  const [selectedSauce, setSelectedSauce] = useState(sauces[0].name);
  const [selectedCheese, setSelectedCheese] = useState(cheeses[0].name);
  const [selectedVeggies, setSelectedVeggies] = useState([]);

  const calculatePrice = () => {
    let totalPrice =
      pizzaBases.find((base) => base.name === selectedBase)?.price +
      sauces.find((sauce) => sauce.name === selectedSauce)?.price +
      cheeses.find((cheese) => cheese.name === selectedCheese)?.price +
      selectedVeggies.reduce((acc, veggie) => {
        return acc + veggies.find((v) => v.name === veggie).price;
      }, 0);

    return totalPrice;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/pizza-base"
            element={
              <PizzaBaseSelector
                selectedBase={selectedBase}
                setSelectedBase={setSelectedBase}
                bases={pizzaBases}
              />
            }
          />
          <Route
            path="/dashboard/sauce"
            element={
              <SauceSelector
                selectedSauce={selectedSauce}
                setSelectedSauce={setSelectedSauce}
                sauces={sauces}
              />
            }
          />
          <Route
            path="/dashboard/cheese"
            element={
              <CheeseSelector
                selectedCheese={selectedCheese}
                setSelectedCheese={setSelectedCheese}
                cheeses={cheeses}
              />
            }
          />
          <Route
            path="/dashboard/veggies"
            element={
              <VeggiesSelector
                selectedVeggies={selectedVeggies}
                setSelectedVeggies={setSelectedVeggies}
                veggies={veggies}
              />
            }
          />
          <Route
            path="/dashboard/order-summary"
            element={
              <OrderSummary
                selectedBase={selectedBase}
                selectedSauce={selectedSauce}
                selectedCheese={selectedCheese}
                selectedVeggies={selectedVeggies}
                price={calculatePrice()}
              />
            }
          />
          <Route
            path="/dashboard/payment"
            element={<PaymentComponent amount={calculatePrice()} />}
          />
          <Route path="/cart" element={<AddToCart addToCart={addToCart} />} />
          <Route path="/admin" element={<AdminDashboard />} />{" "}
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/inventory" element={<InventoryManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
