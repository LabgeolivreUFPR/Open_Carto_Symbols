// Estilo para a primeira camada (polígonos)
var ferrovia = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#E1FFF0'
  }),
  stroke: new ol.style.Stroke({
    color: '#000', // Cor da borda (stroke) dos polígonos
    width: 1 // Espessura da borda (stroke) dos polígonos
  })
});

function ferroviaFunction(feature) {
  return [ferrovia]; // Retorna o estilo dentro de um array
}
