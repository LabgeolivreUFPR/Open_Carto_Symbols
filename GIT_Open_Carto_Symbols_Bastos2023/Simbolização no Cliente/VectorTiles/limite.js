// Estilo para a primeira camada (polígonos)
var limite = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#000000'
  }),
  stroke: new ol.style.Stroke({
    color: '#000000', // Cor da borda (stroke) dos polígonos
    width: 1, // Espessura da borda (stroke) dos polígonos
    lineDash: [10,5,3,5] // Configurar o padrão de traço (5 pixels traçados, 10 pixels em branco)
  })
});

function limiteFunction(feature) {
  return [limite]; // Retorna o estilo dentro de um array
}
