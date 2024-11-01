// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pizzaDetails: Object,
  status: {
    type: String,
    enum: ["Order Received", "In Kitchen", "Sent to Delivery"],
    default: "Order Received"
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
