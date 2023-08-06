// Estilo para a primeira camada (polígonos)
var mangue = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#E6E5FF'
  }),
  stroke: new ol.style.Stroke({
    color: '#E6E5FF',
    width: 1
  })
});

function mangueFunction(feature) {
  return mangue;
}
