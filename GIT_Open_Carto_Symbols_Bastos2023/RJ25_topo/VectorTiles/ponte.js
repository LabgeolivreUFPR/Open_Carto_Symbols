// Estilo para a primeira camada (polígonos)
var ponte = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#F00000'
  }),
  stroke: new ol.style.Stroke({
    color: '#000000', // Cor da borda (stroke) dos polígonos
    width: 2 // Espessura da borda (stroke) dos polígonos
  })
});

function ponteFunction(feature) {
  return [ponte]; // Retorna o estilo dentro de um array
}
