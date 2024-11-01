// services/notificationService.js
const Inventory = require("../models/Inventory");
const sendEmail = require("../utils/email");

const checkStock = async () => {
  const items = await Inventory.find();
  items.forEach((item) => {
    if (item.quantity < item.threshold) {
      sendEmail(
        "admin_email@gmail.com",
        "Stock Alert",
        `${item.name} is below the threshold!`
      );
    }
  });
};

// Call this function after every order or at a scheduled interval
