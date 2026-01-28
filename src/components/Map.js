import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import "./Map.css";

const Map = () => {

  // =================== Load Crime Stats ===================
  const getStats = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/stats.json");
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error.message);
      return null;
    }
  };

  useEffect(() => {

    // =================== Zone Names ===================
    const zoneNames = [
      "Jawahar Nagar & City Centre",
      "Best Nagar & Motilal Nagar",
      "Bangur Nagar & Link Road",
      "Aarey Colony",
      "Film City & IT Parks",
      "Gokuldham & Yashodham",
      "Dindoshi & Nagari Niwas",
      "Oshiwara District Centre (ODC)",
      "Goregaon–Mulund Link Road",
    ];

    // =================== Initialize Map ===================
    const map = L.map("map").setView([19.1663, 72.8526], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // =================== Zone Coordinates ===================
    const zoneLoc = [
      [19.1652, 72.8435],
      [19.1588, 72.8354],
      [19.1725, 72.8361],
      [19.1485, 72.8752],
      [19.1528, 72.8541],
      [19.1738, 72.8624],
      [19.1747, 72.8596],
      [19.1512, 72.8447],
      [19.1691, 72.8554],
    ];

    // =================== Load & Render Heatmap ===================
    const loadMapData = async () => {
      const data = await getStats();

      if (!Array.isArray(data)) {
        console.error("Crime data missing or invalid:", data);
        return;
      }

      // 🔥 Heatmap Glow
      const heatData = zoneLoc.map(([lat, lng], index) => [
        lat,
        lng,
        data[index] || 0,
      ]);

      L.heatLayer(heatData, {
        radius: 40,
        blur: 25,
        max: Math.max(...data, 1),
        gradient: {
          0.2: "blue",
          0.5: "yellow",
          0.8: "orange",
          1.0: "red",
        },
      }).addTo(map);

      // 🔴 Danger Circles + Popup
      zoneLoc.forEach(([lat, lng], index) => {
        const intensity = data[index] || 0;

        L.circle([lat, lng], {
          color: "red",
          fillColor: "#ff0000",
          fillOpacity: 0.6,
          radius: Math.max(intensity * 50, 150),
        })
          .bindPopup(`
            <b>Zone ${index + 1}</b><br/>
            ${zoneNames[index]}<br/>
            <b>Crime Intensity:</b> ${intensity}
          `)
          .addTo(map);
      });

      console.log("Map loaded with crime data:", data);
    };

    loadMapData();

    // =================== Cleanup ===================
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-wrapper">
      <h2>Crime Intensity Heatmap – Goregaon</h2>
      <div id="map"></div>
    </div>
  );
};

export default Map;
