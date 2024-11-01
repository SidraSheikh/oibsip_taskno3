// src/components/Payment/PaymentComponent.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./payment.css"; // Make sure to import the CSS file

const PaymentComponent = () => {
  const location = useLocation();
  const { amount } = location.state || {};

  const handlePayment = () => {
    if (!amount) {
      alert("No amount specified for payment.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: amount * 100, // Convert amount to paise
      currency: "INR",
      name: "Pizza Order",
      description: "Order Payment",
      handler: function (response) {
        console.log("Payment successful", response);
        // Optionally, you can handle success here (e.g., redirect, show message)
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#4CAF50" // Customize Razorpay theme color
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (!amount) {
    return <p>No amount specified for payment.</p>;
  }

  return (
    <div className="payment-component">
      <h2>Complete Payment</h2>
      <p>Amount to be paid: ₹{amount}</p>
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default PaymentComponent;
