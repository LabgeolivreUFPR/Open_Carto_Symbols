// Estilo para a segunda camada (pontos)
function quadraFunction(feature) {
  var quadra = new ol.style.Style({
    image: new ol.style.Icon({
      src: 'quadra.svg', // Ícone personalizado
      imgSize: [15, 13] // Tamanho do ícone em pixels
    })
  });

  return quadra;
}

