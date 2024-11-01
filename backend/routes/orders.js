// routes/orders.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Update order status
router.put("/:id/status", async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findById(req.params.id);
    order.status = status;
    await order.save();

    // Notify user about the order status change
    // This could be done via WebSocket or email

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
