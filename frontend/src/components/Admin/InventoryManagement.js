// src/components/Admin/InventoryManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./inventoryManagement.css"; // Include your CSS for styling

const InventoryManagement = () => {
  const [inventory, setInventory] = useState({
    pizzaBase: 0,
    sauce: 0,
    cheese: 0,
    veggies: 0,
    meat: 0
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch inventory data on component mount
    const fetchInventory = async () => {
      try {
        const response = await axios.get("/api/inventory"); // Fetch inventory
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory data", error);
        setErrorMessage("Error fetching inventory data.");
      }
    };

    fetchInventory();
  }, []);

 const handleUpdate = async (e) => {
   e.preventDefault();
   try {
     await axios.put("/api/inventory", {
       pizzaBase: inventory.pizzaBase,
       sauce: inventory.sauce,
       cheese: inventory.cheese,
       veggies: inventory.veggies,
       meat: inventory.meat
     });
     alert("Inventory updated successfully!");
   } catch (error) {
     console.error("Error updating inventory:", error);
     setErrorMessage(
       error.response
         ? error.response.data.message
         : "Failed to update inventory."
     );
   }
 };

  return (
    <div className="inventory-management">
      <h2>Inventory Management</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Pizza Base:
          <input
            type="number"
            value={inventory.pizzaBase}
            onChange={(e) =>
              setInventory({ ...inventory, pizzaBase: e.target.value })
            }
            required
          />
        </label>
        <label>
          Sauce:
          <input
            type="number"
            value={inventory.sauce}
            onChange={(e) =>
              setInventory({ ...inventory, sauce: e.target.value })
            }
            required
          />
        </label>
        <label>
          Cheese:
          <input
            type="number"
            value={inventory.cheese}
            onChange={(e) =>
              setInventory({ ...inventory, cheese: e.target.value })
            }
            required
          />
        </label>
        <label>
          Veggies:
          <input
            type="number"
            value={inventory.veggies}
            onChange={(e) =>
              setInventory({ ...inventory, veggies: e.target.value })
            }
            required
          />
        </label>
        <label>
          Meat:
          <input
            type="number"
            value={inventory.meat}
            onChange={(e) =>
              setInventory({ ...inventory, meat: e.target.value })
            }
            required
          />
        </label>
        <button type="submit">Update Inventory</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Display error message */}
      </form>
    </div>
  );
};

export default InventoryManagement;
