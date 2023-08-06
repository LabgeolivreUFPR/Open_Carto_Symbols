// Estilo para a camada de temporario (polígonos)
var temporario = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#045DA3' // Cor para temporario (preenchimento)
  }),
  stroke: new ol.style.Stroke({
    color: '#045DA3', // Cor para a borda da linha
    width: 1,
    lineDash: [8, 3, 1, 3] // Espessura da linha
  })
});

// Estilo para a camada pavimentada (polígonos)
var permanente = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#045DA3' // Cor para permanente (preenchimento)
  }),
  stroke: new ol.style.Stroke({
    color: '#045DA3', // Cor para a borda da linha (azul)
    width: 2 // Espessura da linha
  })
});

// Estilo para o texto do nome dos rios
var estiloTexto = new ol.style.Style({
  text: new ol.style.Text({
    text: function (feature) {
      // Obtém o valor do atributo "nome" da feature
      return feature.get('nome');
    },
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: '#045DA3' // Cor do texto (preta)
    }),
    stroke: new ol.style.Stroke({
      color: '#FFFFFF', // Cor da borda do texto (branca)
      width: 2 // Espessura da borda do texto
    }),
    textAlign: 'center',
    textBaseline: 'middle',
    placement: 'line', // Alinha o texto ao vetor da linha
    maxAngle: Math.PI / 6 // Define o ângulo máximo para alinhar o texto (45 graus)
  })
});

function hidrografiaFunction(feature) {
  // Verifica o valor do atributo "regime"
  var regime = feature.get('regime');

  // Retorna os estilos correspondentes com base no valor do atributo
  if (regime === 'Temporário') {
    return [temporario, estiloTexto];
  } else if (regime === 'Permanente') {
    return [permanente, estiloTexto];
  } else {
    // Caso o valor do atributo "regime" não seja reconhecido, retorna os estilos de texto
    return [estiloTexto];
  }
}


