
const mestraStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#705714',
    width: 0.8,
    lineCap: 'square',
    lineJoin: 'bevel'
  })
});

const normalStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#705714',
    width: 0.4
  })
});

// Função que retorna o estilo apropriado com base no atributo 'indice'
function curvaFunction(feature) {
  const indice = feature.get('indice'); // Obtenha o valor do atributo 'indice'
  
  if (indice === 'Mestra') {
    return mestraStyle;
  } else if (indice === 'Normal') {
    return normalStyle;
  }
}




