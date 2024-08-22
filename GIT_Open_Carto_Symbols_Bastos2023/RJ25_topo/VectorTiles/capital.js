function capitalFunction(feature) {
  var nome = feature.get('nome');

  // Quebra o texto a cada 12 caracteres, evitando que palavras sejam divididas
  var palavras = nome.split(' ');
  var texto_quebrado = '';
  var linha = '';
  for (var i = 0; i < palavras.length; i++) {
    if ((linha + palavras[i]).length <= 12) {
      linha += palavras[i] + ' ';
    } else {
      texto_quebrado += linha.trim() + '\n';
      linha = palavras[i] + ' ';
    }
  }
  texto_quebrado += linha.trim();

  var capital = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 0, // Raio do círculo em pixels
      fill: new ol.style.Fill({
        color: '#000000' // Cor de preenchimento do círculo (preto)
      }),
      stroke: new ol.style.Stroke({
        color: '#000000', // Cor da borda do círculo (preto)
        width: 0 // Espessura da borda do círculo (0 para não mostrar borda)
      })
    }),
    text: new ol.style.Text({
      text: texto_quebrado, // Texto a ser exibido como rótulo (texto quebrado)
      font: '20px Times New Roman', // Estilo da fonte (tamanho 10px, tipo Arial)
      offsetY: 0, // Ajuste vertical para posicionar a label abaixo do círculo (pode ser ajustado conforme necessário)
      fill: new ol.style.Fill({
        color: '#000000' // Cor do texto (preto)
      }),
      stroke: new ol.style.Stroke({
        color: 'white', // Cor da borda da label (branco)
        width: 1 // Espessura da borda da label (1 pixel)
      }),
      textAlign: 'center', // Centraliza o texto horizontalmente
      textBaseline: 'top', // Alinha o texto no topo, para que fique abaixo do círculo
      overflow: true, // Permite que o texto possa ser maior do que o tamanho especificado
      wordWrap: true, // Habilita a quebra de linha entre palavras
      maxLines: 2 // Define o número máximo de linhas para o texto (ajuste conforme necessário)
    })
  });

  return capital;
}

