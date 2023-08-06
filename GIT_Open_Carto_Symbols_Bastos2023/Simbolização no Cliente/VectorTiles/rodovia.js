// Estilo para a camada de leito natural (polígonos)
var leitoNatural = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#000000' // Cor para leito natural (preenchimento)
  }),
  stroke: new ol.style.Stroke({
    color: '#000000', // Cor para a borda da linha (verde)
    width: 1 // Espessura da linha
  })
});

// Estilo para a camada pavimentada (polígonos)
var pavimentado = new ol.style.Style({
  fill: new ol.style.Fill({
    color: '#DC0000' // Cor para pavimentado (preenchimento)
  }),
  stroke: new ol.style.Stroke({
    color: '#DC0000', // Cor para a borda da linha (azul)
    width: 2 // Espessura da linha
  })
});
function rodoviaFunction(feature) {
  // Verifica o valor do atributo "revestimento"
  var revestimento = feature.get('revestimento');

  // Retorna o estilo correspondente com base no valor do atributo
  if (revestimento === 'Leito natural') {
    return [leitoNatural];
  } else if (revestimento === 'Pavimentado') {
    return [pavimentado];
  } else {
    // Caso o valor do atributo "revestimento" não seja reconhecido, retorna um array vazio (ignora o estilo)
    return [];
  }
}
