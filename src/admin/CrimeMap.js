import React from "react";
import Map from "../components/Map"; // adjust path if needed

function CrimeMap() {
  return (
    <div className="tab-content">
      <h2>Crime Map</h2>

      {/* Leaflet Crime Heatmap */}
      <Map />
    </div>
  );
}

export default CrimeMap;
