// backend/routes/paymentRoutes.js
const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: "YOUR_RAZORPAY_KEY_ID",
  key_secret: "YOUR_RAZORPAY_KEY_SECRET"
});

// Endpoint to create an order
router.post("/razorpay", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount in smallest currency unit
    currency: "INR",
    receipt: "receipt#1" // Optional
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ order_id: order.id });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
