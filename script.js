
const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;


var pion = document.getElementById('pion'),
    s = pion.style, // Un petit raccourci
    x = pion.offsetLeft, // On récupère la position absolue initiale.
    y = pion.offsetTop;



var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;




var blockGrid = [];
for(var i=0 ; i < H_GRID; i++){
  blockGrid.push([]);
  for(var j=0 ; j < V_GRID ; j++){
    let block=document.createElement('div');
    block.style.width='40px';
    block.style.height='40px';
    block.style.display='flex';
    block.style.position='absolute';

    if (random100()>70){ block.style.backgroundColor='black';
    block.traverser = false;
  }
    else {
    block.style.backgroundColor='white';
    block.traverser = true;
  }
    block.style.marginLeft = (i * GRID_SIZE).toString()+'px';
    block.style.marginTop = (j * GRID_SIZE).toString()+'px';

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);
  }
}
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, x et y.
    switch(keyCode){
    case 38:
        y-=GRID_SIZE;
        break;
    case 40:
        y+=GRID_SIZE;
        break;
    case 37:
        x-=GRID_SIZE;
        break;
    case 39:
        x+=GRID_SIZE;
        break;
    }
    // Et enfin on applique les modifications :

		if (x < 0) x = 0;
		if (y < 0) y = 0;
		if (x > WINDOW_WIDTH-GRID_SIZE && blockGrid[y/GRID_SIZE][x/GRID_SIZE].traverser ) x=760;
		if (y > 760 ) y=760;

		s.left = String(x)+'px';
		s.top = String(y)+'px';
}
function randomColor(){
return "#" + ((1<<24)*Math.random()|0).toString(16);
}
function random100() {
return Math.floor(Math.random() * 100);
}
