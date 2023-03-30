let stop_lat = -45.345275;
let stop_lng = 170.826061;
let zoom = 13;
let title = 'Moeraki Boulders'

const STOPS = ["Lake Tekapo", {
    title: "Tongariro-Nationalpark",
    user: "Mirjamkirschner",
    lat: -45.345275,
    lng: 170.826061,
    Wikipedia: "https://en.wikipedia.org/wiki/Moeraki_Boulders"
}, "Milford Sound"];
console.log(STOPS);

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup();