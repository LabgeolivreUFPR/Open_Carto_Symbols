// Estilo para a primeira camada (polígonos)
var ilha = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#f3fbe9'
  }),
  stroke: new ol.style.Stroke({
    color: '#045da3',
    width: 0.5
  })
});

function ilhaFunction(feature) {
  return ilha;
}
