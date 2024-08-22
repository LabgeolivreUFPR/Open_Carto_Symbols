// Estilo para a primeira camada (polígonos)
var areaener = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#000000'
  }),
  stroke: new ol.style.Stroke({
    color: '#000000',
    width: 0.5
  })
});

function areaenerFunction(feature) {
  return areaener;
}
