// src/components/Admin/AdminDashboard.js
import React from "react";
import InventoryManagement from "./Admin/InventoryManagement";
import OrderManagement from "./Admin/OrderManagement";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <InventoryManagement />
      <OrderManagement />
    </div>
  );
};

export default AdminDashboard;
