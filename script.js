
const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

var pion = document.getElementById('pion'),
    s = pion.style, // Un petit raccourci
    x = 0, // On récupère la position absolue initiale.
    y = 0;



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

    if (random100()>80 && blockGrid[0][0]){
      block.style.backgroundImage='url(mur2.png)';
      block.style.backgroundSize='contain'
      block.traverser = false;
  }
   else if (random100()>90 && blockGrid[0][0]) {
     block.style.backgroundImage='url(mur1.png)';
     block.style.backgroundSize='contain'
     block.traverser = false;

   }

  else {
    block.style.backgroundImage='url(sol.png)';
    block.style.backgroundSize='contain'
    block.traverser = true;
  }
    block.style.marginLeft = (i * GRID_SIZE).toString()+'px';
    block.style.marginTop = (j * GRID_SIZE).toString()+'px';


    document.getElementById("plateau").appendChild(block );
    blockGrid[i].push(block);
  }
}


// //
const foe = document.querySelector('#foe');
// fs = foe.style, // Un petit raccourci
// fx = 0, // On récupère la position absolue initiale.
// fy = 0;

setInterval(() => {
  var fs = foe.style, // Un petit raccourci
  fx = 10, // On récupère la position absolue initiale.
  fy = 10;

  if (Math.floor(Math.random() * 8)){

   if(fy > 0 && blockGrid[fx][fy - 1].traverser)
      fy--;


else if(fy < V_GRID-1 && blockGrid [fx ][fy + 1].traverser)
      fy++;


  else if(fx > 0 && blockGrid [fx  - 1][fy].traverser)
      fx--;


  else if(fx < H_GRID-1 && blockGrid [fx  + 1][fy].traverser)
      fx++;

  }
  fs.left = String(fx*GRID_SIZE)+'px';
  fs.top = String(fy*GRID_SIZE)+'px';


}, 50); // every 1/2 second

document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, x et y.
    switch(keyCode){
    case 38:
    if(y > 0 && blockGrid[x][y - 1].traverser)
        y--;
        break;
    case 40:
    if(y < V_GRID-1 && blockGrid [x ][y + 1].traverser)
        y++;
        break;
    case 37:
    if(x > 0 && blockGrid [x  - 1][y].traverser)
        x--;
        break;
    case 39:
    if(x < H_GRID-1 && blockGrid [x  + 1][y].traverser)
        x++;
        break;
    }
    // Et enfin on applique les modifications :;


		s.left = String(x*GRID_SIZE)+'px';
		s.top = String(y*GRID_SIZE)+'px';
}

function randomColor(){
return "#" + ((1<<24)*Math.random()|0).toString(16);
}
function random100() {
return Math.floor(Math.random() * 100);
}
