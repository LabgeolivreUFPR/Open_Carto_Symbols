// Estilo para a primeira camada (polígonos)
var floresta = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#96CFB2'
  }),
  stroke: new ol.style.Stroke({
    color: '#96CFB2',
    width: 1
  })
});

function florestaFunction(feature) {
  return floresta;
}
