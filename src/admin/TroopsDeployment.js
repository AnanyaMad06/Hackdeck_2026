import { useState } from "react";
import "./TroopsDeployment.css";

function TroopsDeployment() {
  const [totalTroops, setTotalTroops] = useState("");
  const [deployment, setDeployment] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/suggest-patrol-deployment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            totalTroops: Number(totalTroops),
          }),
        }
      );

      const data = await response.json();
      setDeployment(data);
    } catch (error) {
      console.error("Error fetching deployment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="troops-container">
      <h2 className="troops-title">🪖 AI Troops Deployment</h2>

      {/* Admin Input */}
      <form className="troops-form" onSubmit={handleSubmit}>
        <label>Total Troops Available</label>
        <input
          type="number"
          min="1"
          placeholder="Enter total number of troops"
          value={totalTroops}
          onChange={(e) => setTotalTroops(e.target.value)}
          required
        />
        <button type="submit">Allocate Troops</button>
      </form>

      {/* Result */}
      {loading ? (
        <p className="loading">AI is calculating optimal deployment...</p>
      ) : deployment.length > 0 ? (
        <div className="troops-grid">
          {deployment.map((count, index) => (
            <div key={index} className="troop-card">
              <h3>Zone {index}</h3>
              <p className="troop-count">{count}</p>
              <span>Troops Deployed</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default TroopsDeployment;
