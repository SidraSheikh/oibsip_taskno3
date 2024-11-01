const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = "your_jwt_secret"; // Change this to a strong secret in production

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your connection string)
mongoose
  .connect(
    "mongodb+srv://fa21bsse0031:sidra27169430031@sidra.gag9gix.mongodb.net/PizzaOrderingWebsite",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// User schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", UserSchema);

// Register endpoint
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  res.status(201).send({ message: "User registered successfully!" });
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.send({ token });
});

// Get inventory endpoint
const InventorySchema = new mongoose.Schema({
  itemType: {
    type: String,
    enum: ["base", "sauce", "cheese", "veggie", "meat"],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  threshold: {
    type: Number,
    default: 20 // Threshold for notifications
  }
});

const Inventory = mongoose.model("Inventory", InventorySchema);

// Fetch inventory endpoint
app.get("/api/inventory", async (req, res) => {
  try {
    const inventory = await Inventory.find(); // Fetch all inventory items
    res.json(inventory);
  } catch (error) {
    res.status(500).send({ message: "Error fetching inventory" });
  }
});

// Update inventory endpoint
app.put("/api/inventory", async (req, res) => {
  const { pizzaBase, sauce, cheese, veggies, meat } = req.body;

  try {
    // Update the inventory items
    await Inventory.updateMany(
      { itemType: "base" },
      { $set: { quantity: pizzaBase } }
    );
    await Inventory.updateMany(
      { itemType: "sauce" },
      { $set: { quantity: sauce } }
    );
    await Inventory.updateMany(
      { itemType: "cheese" },
      { $set: { quantity: cheese } }
    );
    await Inventory.updateMany(
      { itemType: "veggie" },
      { $set: { quantity: veggies } }
    );
    await Inventory.updateMany(
      { itemType: "meat" },
      { $set: { quantity: meat } }
    );

    res.send({ message: "Inventory updated successfully!" });
  } catch (error) {
    console.error("Error updating inventory", error);
    res.status(500).send({ message: "Failed to update inventory" });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "email"); // Populate user details if necessary
    res.send(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send({ message: "Failed to fetch orders" });
  }
});

app.put("/api/orders/:id", async (req, res) => {
  const { id } = req.params; // Extract order ID from request params
  const { status } = req.body; // Extract new status from request body

  try {
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    res.send(order); // Respond with the updated order
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).send({ message: "Failed to update order status" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
