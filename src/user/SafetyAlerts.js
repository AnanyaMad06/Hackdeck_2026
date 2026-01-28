import { useEffect, useState } from "react";

function SafetyAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/alerts.json")
      .then((res) => res.json())
      .then((data) => {
        setAlerts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching safety alerts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>🚨 Safety Alerts</h2>

      {loading ? (
        <p>Loading alerts...</p>
      ) : alerts.length === 0 ? (
        <p>No active safety alerts</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>
              ⚠ {alert.message}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SafetyAlerts;
