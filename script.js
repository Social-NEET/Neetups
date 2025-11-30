// Initialize the map
var map = L.map('map').setView([52.242953,21.052431], 20); // [latitude, longitude], zoom level

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Optional: Add a marker
L.marker([52.242953,21.052431]).addTo(map)
    .bindPopup('Meet up 20:00 every wednesday, near the statue!')
    .openPopup();