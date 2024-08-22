// Estilo para a primeira camada (polígonos)
var cultivada = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#7FFF7F'
  }),
  stroke: new ol.style.Stroke({
    color: '#7FFF7F',
    width: 1
  })
});

function cultivadaFunction(feature) {
  return cultivada;
}
