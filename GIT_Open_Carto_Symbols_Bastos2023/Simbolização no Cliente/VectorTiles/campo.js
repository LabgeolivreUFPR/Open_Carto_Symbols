// Estilo para a primeira camada (polígonos)
var campo = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#F3FBE9'
  }),
  stroke: new ol.style.Stroke({
    color: '#F3FBE9',
    width: 1
  })
});

function campoFunction(feature) {
  return campo;
}
