// Estilo para a primeira camada (polígonos)
var curva = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#705714'
  }),
  stroke: new ol.style.Stroke({
    color: '#705714', // Cor da borda (stroke) dos polígonos
    width: 0.3 // Espessura da borda (stroke) dos polígonos
  })
});

function curvaFunction(feature) {
  return [curva]; // Retorna o estilo dentro de um array
}
