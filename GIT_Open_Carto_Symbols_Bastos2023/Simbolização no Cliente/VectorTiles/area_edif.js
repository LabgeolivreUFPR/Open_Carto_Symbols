// Estilo para a primeira camada (polígonos)
var area_edif = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#E6E6E6'
  }),
  stroke: new ol.style.Stroke({
    color: '#E6E6E6',
    width: 1
  })
});

function area_edifFunction(feature) {
  return area_edif;
}
