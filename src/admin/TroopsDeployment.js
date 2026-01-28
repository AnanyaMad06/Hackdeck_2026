import { useEffect, useState } from "react";
import "./TroopsDeployment.css";

function TroopsDeployment() {
  const [deployment, setDeployment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/suggest-patrol-deployment")
      .then((res) => res.json())
      .then((data) => {
        setDeployment(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching troop deployment:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="troops-container">
      <h2 className="troops-title">🪖 Troops Deployment</h2>

      {loading ? (
        <p className="loading">Loading deployment data...</p>
      ) : deployment.length === 0 ? (
        <p className="no-data">No deployment data available</p>
      ) : (
        <div className="troops-grid">
          {deployment.map((count, index) => (
            <div key={index} className="troop-card">
              <h3>Zone {index}</h3>
              <p className="troop-count">{count}</p>
              <span className="troop-label">Troops Deployed</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TroopsDeployment;
