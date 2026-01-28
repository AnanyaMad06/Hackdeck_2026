import { useEffect, useState } from "react";
import "./SafetyAlerts.css";

function SafetyAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* 🔗 API ENDPOINT PLACEHOLDER */
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
    <div className="safety-container">
      <h2 className="safety-title">🚨 Safety Alerts</h2>

      {loading ? (
        <p className="loading">Loading alerts...</p>
      ) : alerts.length === 0 ? (
        <p className="no-alerts">No active safety alerts</p>
      ) : (
        <div className="alert-grid">
          {alerts.map((alert, index) => (
            <div key={index} className="alert-card">
              <div className="alert-icon">⚠</div>
              <div className="alert-content">
                <p>{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SafetyAlerts;
