const mapContainer = document.getElementById('map');
const webmapContainer = document.getElementById('webmapContainer');
const openWebMap1Button = document.getElementById('openWebMap1');
const openWebMap2Button = document.getElementById('openWebMap2');


openWebMap1Button.addEventListener('click', () => {
    loadWebMap(webMap1HTML);
});

openWebMap2Button.addEventListener('click', () => {
    loadWebMap(webMap2HTML);
});


function loadWebMap(webmapHTML) {
    webmapContainer.innerHTML = webmapHTML;
}

const webMap1HTML = `
    <!-- Conteúdo HTML do seu primeiro webmap -->
    <div id="webmap1">
        <!-- Incorporar o conteúdo do seu primeiro webmap usando um iframe -->
        <iframe src="file:///C:/Users/tiago/OneDrive/%C3%81rea%20de%20Trabalho/sistema_artigo/WebMap_todos/WMS/RJ25_WMS.html" 
		width="100%" height="700px"></iframe>
    </div>
`;

const webMap2HTML = `
    <!-- Conteúdo HTML do seu segundo webmap -->
    <div id="webmap2">
        <!-- Incorporar o conteúdo do seu segundo webmap usando um iframe -->
        <iframe src="file:///C:/Users/tiago/OneDrive/%C3%81rea%20de%20Trabalho/sistema_artigo/WebMap_todos/VectorTiles/index.html" 
		width="100%" height="700px"></iframe>
    </div>
`;


