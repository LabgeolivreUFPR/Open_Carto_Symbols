// Estilo para a primeira camada (polígonos)
var rocha = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#91A1A6'
  }),
  stroke: new ol.style.Stroke({
    color: '#91A1A6',
    width: 1
  })
});

function rochaFunction(feature) {
  return rocha;
}
