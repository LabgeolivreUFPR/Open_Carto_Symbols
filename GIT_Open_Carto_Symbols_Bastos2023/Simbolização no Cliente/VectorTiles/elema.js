var elema = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#BBB6A6'
  }),
  stroke: new ol.style.Stroke({
    color: '#BBB6A6',
    width: 1
  })
});

function elemaFunction(feature) {
  return elema;
}