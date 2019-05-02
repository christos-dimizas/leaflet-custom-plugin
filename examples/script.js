const lc = L.latLng(37.9838,23.7275);

const map = L.map('map',{
    renderer: L.canvas(),
}).setView(lc, 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    preferCanvas: true
}).addTo(map);

const tiles = new L.GridLayer();
const drawer = new L.Canvas.Draw();
drawer.rectangle(tiles, lc);
tiles.addTo(map);
