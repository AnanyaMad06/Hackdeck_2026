import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CrimeMap from "./CrimeMap";
import ReportedCrimes from "./ReportedCrimes";
import SafetyAlerts from "./SafetyAlerts";
import SafetyTips from "./SafetyTips";
import "./UserDashboard.css";

function UserDashboard() {
  const [active, setActive] = useState("map");

  const renderComponent = () => {
    switch (active) {
      case "reports":
        return <ReportedCrimes />;
      case "alerts":
        return <SafetyAlerts />;
      case "tips":
        return <SafetyTips />;
      default:
        return <CrimeMap />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar setActive={setActive} />

      <div className="dashboard-main">
        <h1>Welcome, User</h1>
        <p className="subtitle">Stay informed. Stay safe.</p>

        <div className="content-card">{renderComponent()}</div>
      </div>
    </div>
  );
}

export default UserDashboard;
