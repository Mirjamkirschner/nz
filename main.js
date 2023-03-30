let stop_lat = -45.345275;
let stop_lng = 170.826061;
let zoom = 13;
let title = 'Moeraki Boulders'

const STOPS = ["Lake Tekapo", "Moeraki Boulders", "Milford Sound"];
console.log(STOPS);
console.log(STOPS[0]);
console.log(STOPS[1]);
console.log(STOPS[2]);
console.log(STOPS.length);

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup();