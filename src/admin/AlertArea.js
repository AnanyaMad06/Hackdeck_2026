import React, { useState } from "react";

/**
 * zone → area mapping
 * zone number is what will be sent to API
 */
const zones = [
  { zone: 1, name: "Jawahar Nagar & City Centre" },
  { zone: 2, name: "Best Nagar & Motilal Nagar" },
  { zone: 3, name: "Bangur Nagar & Link Road" },
  { zone: 4, name: "Aarey Colony" },
  { zone: 5, name: "Film City & IT Parks" },
  { zone: 6, name: "Gokuldham & Yashodham" },
  { zone: 7, name: "Dindoshi & Nagari Niwas" },
  { zone: 8, name: "Oshiwara District Centre (ODC)" },
  { zone: 9, name: "Goregaon–Mulund Link Road" },
];

function AlertArea() {
  const [zone, setZone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      zoneNumber: zone,
      message: message,
    };

    console.log("Payload to send:", payload);

    await fetch("localhost:5000/api/alert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setZone("");
    setMessage("");
  };

  return (
    <div className="tab-content">
      <h2>🚨 Send Alert</h2>

      <form className="alert-form" onSubmit={handleSubmit}>
        <label>Select Area (Zone)</label>
        <select
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          required
        >
          <option value="">-- Select Zone --</option>
          {zones.map((item) => (
            <option key={item.zone} value={item.zone}>
              Zone {item.zone} – {item.name}
            </option>
          ))}
        </select>

        <label>Alert Message</label>
        <textarea
          placeholder="Enter alert message for residents"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send Alert</button>
      </form>
    </div>
  );
}

export default AlertArea;
