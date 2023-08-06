// Estilo para a primeira camada (polígonos)
var brejo = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#96CECC'
  }),
  stroke: new ol.style.Stroke({
    color: '#96CECC',
    width: 1
  })
});

function brejoFunction(feature) {
  return brejo;
}
