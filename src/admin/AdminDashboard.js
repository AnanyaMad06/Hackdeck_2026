import React, { useState } from "react";
import FIRForm from "./FIRForm";
import CrimeMap from "./CrimeMap";
import AlertArea from "./AlertArea";
import TroopsDeployment from "./TroopsDeployment";
import "./admin.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("registerFIR");

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>SafeCity Admin</h2>
        <ul>
          <li
            className={activeTab === "registerFIR" ? "active" : ""}
            onClick={() => setActiveTab("registerFIR")}
          >
            Register FIR
          </li>

          <li
            className={activeTab === "crimeMap" ? "active" : ""}
            onClick={() => setActiveTab("crimeMap")}
          >
            Crime Map
          </li>

          <li
            className={activeTab === "alertArea" ? "active" : ""}
            onClick={() => setActiveTab("alertArea")}
          >
            Alert Area
          </li>

          {/* 🪖 NEW TAB */}
          <li
            className={activeTab === "troopsDeployment" ? "active" : ""}
            onClick={() => setActiveTab("troopsDeployment")}
          >
            Troops Deployment
          </li>
        </ul>
      </aside>

      <main className="main-content">
        {activeTab === "registerFIR" && <FIRForm />}
        {activeTab === "crimeMap" && <CrimeMap />}
        {activeTab === "alertArea" && <AlertArea />}
        {activeTab === "troopsDeployment" && <TroopsDeployment />}
      </main>
    </div>
  );
}

export default AdminDashboard;
