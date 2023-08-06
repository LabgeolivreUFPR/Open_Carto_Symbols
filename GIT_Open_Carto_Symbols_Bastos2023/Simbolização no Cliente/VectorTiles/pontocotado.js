// Estilo para a segunda camada (pontos)
function pontocotadoFunction(feature) {
  var cota = feature.get('');
  var pontocotado = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 1, // Raio do círculo em pixels
      fill: new ol.style.Fill({
        color: '#705714' // Cor de preenchimento do círculo
      }),
      stroke: new ol.style.Stroke({
        color: '#705714', // Cor da borda do círculo
        width: 0 // Espessura da borda do círculo
      })
    }),
    text: new ol.style.Text({
      text: cota, // Texto sem quebra
      font: '9px Century Gothic', // Estilo da fonte
      offsetY: 10, // Ajuste vertical para posicionar a label abaixo do círculo
      fill: new ol.style.Fill({
        color: '#705714' // Cor da label
      }),
      stroke: new ol.style.Stroke({
        color: 'white', // Cor da borda da label
        width: 1
      }),
      textAlign: 'center', // Centraliza o texto horizontalmente
      textBaseline: 'top' // Alinha o texto no topo, para que fique abaixo do círculo
    })
  });

  return pontocotado;
}
