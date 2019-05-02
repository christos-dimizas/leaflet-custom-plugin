'use strict';
if(!L.Canvas) {
    console.error('ERROR: NO LEAFLET CANVAS FOUND');
}

L.Canvas.Draw = L.Canvas.extend({
    rectangle: (tiles, coords, rectSize = [15, 15]) => {
        tiles.createTile = coordinates => {
            const tile = L.DomUtil.create('canvas', 'leaflet-tile');
            const tileSize = tiles.getTileSize();
            tile.width = tileSize.x;
            tile.height = tileSize.y;

            const ctx = tile.getContext('2d');

            const s = coordinates.multiplyBy(tiles.options.tileSize);
            const p = tiles._map.project(new L.LatLng(coords.lat, coords.lng), coordinates.z);
            const x = Math.round(p.x - s.x);
            const y = Math.round(p.y - s.y);
            const point = [x, y];

            ctx.beginPath();
            ctx.rect(point[0], point[1], rectSize[0], rectSize[0]);
            ctx.closePath();
            ctx.fillStyle = 'orange';
            ctx.fill();

            return tile;
        };
    },
});
