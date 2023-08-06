// Estilo para a primeira camada (polígonos)
var trechoener = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#000000'
  }),
  stroke: new ol.style.Stroke({
    color: '#000000', // Cor da borda (stroke) dos polígonos
    width: 0.5, // Espessura da borda (stroke) dos polígonos
    lineDash: [15,5,1,5] // Configurar o padrão de traço (5 pixels traçados, 10 pixels em branco)
  })
});

function trechoenerFunction(feature) {
  return [trechoener]; // Retorna o estilo dentro de um array
}
