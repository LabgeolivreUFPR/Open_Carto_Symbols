// Estilo para a camada de pontos
function pontocotadoFunction(feature) {
  // Substitua '' pelo nome correto do atributo que contém o texto
  var cota = feature.get('cota'); // Corrija o nome do atributo se necessário

  var pontocotado = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 1, // Raio do círculo em pixels (ajustado para melhor visibilidade)
      fill: new ol.style.Fill({
        color: '#705714' // Cor de preenchimento do círculo
      }),
      stroke: new ol.style.Stroke({
        color: '#705714', // Cor da borda do círculo
        width: 1 // Espessura da borda do círculo
      })
    }),
    text: new ol.style.Text({
      text: cota !== undefined ? String(cota) : '', // Verifica se 'cota' é definido e converte para string
      font: '9px bold italic Century Gothic', // Estilo da fonte
      offsetY: 5, // Ajuste vertical para posicionar a label abaixo do círculo
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


