// Estilo para a primeira camada (polígonos)
function massaFunction(feature) {
  var nome = feature.get('nome'); // Obtém o atributo 'nome' do objeto feature

  var estilo = new ol.style.Style({
    fill: new ol.style.Fill({
      color: '#91d1f5'
    }),
    stroke: new ol.style.Stroke({
      color: '#045da3',
      width: 0.5
    }),
    text: new ol.style.Text({
      text: nome, // Texto a ser exibido como rótulo (atributo 'nome' do objeto feature)
      font: 'italic bold 11px Century Gothic', // Estilo da fonte e tamanho
      fill: new ol.style.Fill({
        color: '#045da3' // Cor do texto (preto)
      }),
      stroke: new ol.style.Stroke({
        color: 'white', // Cor da borda da label (branco)
        width: 1
      }),
      textAlign: 'center', // Centraliza o texto horizontalmente
      textBaseline: 'middle' // Alinha o texto verticalmente no centro do polígono
    })
  });

  return [estilo]; // Retornamos um array de estilos, pois pode haver mais de um estilo para uma feature
}
