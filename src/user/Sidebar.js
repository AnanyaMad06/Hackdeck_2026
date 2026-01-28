import React from "react";

function Sidebar({ setActive }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">SafeCity User</h2>

      <button className="active" onClick={() => setActive("map")}>
        Crime Map
      </button>
      <button onClick={() => setActive("reports")}>
        Reported Crimes
      </button>
      <button onClick={() => setActive("alerts")}>
        Safety Alerts
      </button>
      <button onClick={() => setActive("tips")}>
        Safety Tips
      </button>
    </div>
  );
}

export default Sidebar;
