// Função para quebrar o texto a cada 20 caracteres sem dividir palavras
function quebrarTexto(texto, tamanhoMaximo) {
  var palavras = texto.split(' ');
  var textoQuebrado = '';
  var linha = '';
  for (var i = 0; i < palavras.length; i++) {
    if ((linha + palavras[i]).length <= tamanhoMaximo) {
      linha += palavras[i] + ' ';
    } else {
      textoQuebrado += linha.trim() + '\n';
      linha = palavras[i] + ' ';
    }
  }
  textoQuebrado += linha.trim();
  return textoQuebrado.trim();
}

// Estilo para a segunda camada (pontos)
function mineralFunction(feature) {
  var nome = feature.get('nome');
  var textoQuebrado = quebrarTexto(nome, 20);

  var mineral = new ol.style.Style({
    image: new ol.style.Icon({
      src: 'mineral.svg', // Ícone personalizado
      imgSize: [10, 10] // Tamanho do ícone em pixels
    }),
    text: new ol.style.Text({
      text: textoQuebrado, // Texto quebrado em várias linhas
      font: '9px Century Gothic', // Estilo da fonte
      offsetX: 0,
      offsetY: 0, // Ajuste vertical para posicionar a label abaixo do ícone
      fill: new ol.style.Fill({
        color: 'black' // Cor da label
      }),
      stroke: new ol.style.Stroke({
        color: 'white', // Cor da borda da label
        width: 2
      }),
      overflow: true, // Permite que a label seja quebrada em várias linhas
      maxAngle: 0, // Ajusta o ângulo da label para 0 para que ela fique sempre na horizontal
      textAlign: 'center', // Centraliza o texto horizontalmente
      textBaseline: 'top', // Alinha o texto no topo, para que fique abaixo do ícone
      offsetY: 10 // Ajuste vertical para posicionar a label abaixo do ícone
    })
  });

  return mineral;
}
