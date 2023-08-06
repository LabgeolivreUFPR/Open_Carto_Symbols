// Estilo para a primeira camada (polígonos)
var tsi = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#f2ffff'
  }),
  stroke: new ol.style.Stroke({
    color: '#f2ffff',
    width: 0
  })
});

function tsiFunction(feature) {
  return tsi;
}
