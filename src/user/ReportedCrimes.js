import { useEffect, useState } from "react";
import "./ReportedCrimes.css";

function ReportedCrimes() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/firs.json")
      .then((res) => res.json())
      .then((data) => {
        setReports(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching FIRs:", err);
        setLoading(false);
      });
  }, []);

  const formatDateTime = (timestamp) => {
    const dateObj = new Date(timestamp * 1000); // unix → ms

    const date = dateObj.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const time = dateObj.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { date, time };
  };

  const filteredReports = reports.filter((report) =>
    report.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="news-container">
      <h2 className="news-title">📰 Reported Crimes</h2>

      <input
        type="text"
        placeholder="Search crime news..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p className="loading">Loading reports...</p>
      ) : filteredReports.length === 0 ? (
        <p className="no-news">No reports found</p>
      ) : (
        filteredReports.map((report) => {
          const { date, time } = formatDateTime(report.timestamp);

          return (
            <div key={report.id} className="news-card">
              <div className="news-meta">
                <span>{date}</span>
                <span>{time}</span>
              </div>
              <p className="news-content">{report.content}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ReportedCrimes;
