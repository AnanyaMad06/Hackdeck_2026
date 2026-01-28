const getStats = async (timestamp) => {
    try {
        const response = await fetch(`/api/stats?t=${timestamp}`);
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Fetch error:", error.message);
        return null;
    }
};

const initMap = async () => {
    const map = L.map('map').setView([19.1663, 72.8526], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const zoneLoc = [
        [19.1652, 72.8435], [19.1588, 72.8354], [19.1725, 72.8361],
        [19.1485, 72.8752], [19.1528, 72.8541], [19.1738, 72.8624],
        [19.1747, 72.8596], [19.1512, 72.8447], [19.1691, 72.8554]
    ];

    const timestamp = Math.round(Date.now() / 5000);
    const data = await getStats(timestamp);

    if (data && Array.isArray(data)) {
        const crimeData = zoneLoc.map(([lat, lng], index) => {
            const intensity = data[index];
            return [lat, lng, intensity]; 
        });

        if (data && Array.isArray(data)) {
    // 1. Keep your heatmap if you want the "glow"
    const crimeData = zoneLoc.map(([lat, lng], index) => [lat, lng, data[index]]);
    
    L.heatLayer(crimeData, {
        radius: 25,
        blur: 15,
        max: Math.max(...data, 1),
        gradient: { 0.2: 'blue', 0.6: 'yellow', 1.0: 'red' }
    }).addTo(map);

    // 2. Add individual Orange Circles based on intensity
    zoneLoc.forEach(([lat, lng], index) => {
        const intensity = data[index] || 0;

        // Leaflet L.circle radius is in METERS
        // Adjust the multiplier (e.g., 20) to make circles larger or smaller
        L.circle([lat, lng], {
            color: 'orange',      // Border color
            fillColor: '#ffa500', // Fill color (orange)
            fillOpacity: 0.5,
            radius: intensity * 20 
        })
        .bindPopup(`Zone: ${index + 1}<br>Intensity: ${intensity}`)
        .addTo(map);
    });
}

        console.log("Heatmap added with data:", crimeData);
    } else {
        console.error("Data missing or not an array:", data);
    }
};

initMap();