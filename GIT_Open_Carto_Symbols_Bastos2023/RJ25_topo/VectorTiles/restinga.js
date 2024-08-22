// Estilo para a primeira camada (polígonos)
var restinga = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#E1FFF0'
  }),
  stroke: new ol.style.Stroke({
    color: '#E1FFF0',
    width: 1
  })
});

function restingaFunction(feature) {
  return restinga;
}
