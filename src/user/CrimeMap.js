import React from "react";
import Map from "../components/Map"; // adjust path if needed

function CrimeMap() {
  return (
    <>
      <h2 style={{ marginBottom: "15px" }}>Crime Map</h2>

      <div
        style={{
          height: "450px",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",     // IMPORTANT → hides borders
          background: "#fff",     // no blue/grey background
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
        }}
      >
        <Map />
      </div>
    </>
  );
}

export default CrimeMap;
