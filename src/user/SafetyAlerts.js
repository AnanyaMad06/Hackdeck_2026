import { useEffect, useState } from "react";
import "./SafetyAlerts.css";

function SafetyAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* 🔗 API ENDPOINT PLACEHOLDER */
    fetch("YOUR_API_ENDPOINT_HERE")
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
<<<<<<< HEAD
            <div key={index} className="alert-card">
              <div className="alert-icon">⚠</div>
              <div className="alert-content">
                <p>{alert.message}</p>
              </div>
            </div>
=======
            <li key={index}>
              {alert.message}
            </li>
>>>>>>> e4e2516afbd4de6e70f70280e3b0db72d61f0227
          ))}
        </div>
      )}
    </div>
  );
}

export default SafetyAlerts;
