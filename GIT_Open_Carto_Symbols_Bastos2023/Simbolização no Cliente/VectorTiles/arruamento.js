// Estilo para a primeira camada (polígonos)
var arruamento = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#000000'
  }),
  stroke: new ol.style.Stroke({
    color: '#000000', // Cor da borda (stroke) dos polígonos
    width: 0.3 // Espessura da borda (stroke) dos polígonos
  })
});

function arruamentoFunction(feature) {
  return [arruamento]; // Retorna o estilo dentro de um array
}
