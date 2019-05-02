Leaflet.CustomPlugin
==

### Description

- create a dummy leaflet plugin which can draw a square in a single canvas


### Usage

```javascript
const lc = L.latLng(37.9838,23.7275);

const map = L.map('map',{
    renderer: L.canvas(),
}).setView(lc, 7);

const tiles = new L.GridLayer();
const drawer = new L.Canvas.Draw();
drawer.rectangle(tiles, lc);

tiles.addTo(map);
```