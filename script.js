const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;


var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;

var pion = document.getElementById('pion'),
  s = pion.style, // Un petit raccourci
  x = pion.offsetLeft, // On récupère la position absolue initiale.
  y = pion.offsetTop;


var blockGrid = [];
for (var i = 0; i < H_GRID; i++) {
  blockGrid.push([]);

  for (var j = 0; j < V_GRID; j++) {

    // var foe = document.createElement('div');
    // fs = foe.style;
    // fs.width = GRID_SIZE +'px';
    // fs.height = GRID_SIZE +'px';
    // fs.position = 'absolute';
    // fs.zIndex ='1';
    // direction = "right";

    let block = document.createElement('div');
    block.style.width = '40px';
    block.style.height = '40px';
    block.style.backgroundSize = 'contain';
    block.style.position = 'absolute';

 if (random100() > 90 && blockGrid[0][0] ) {
      block.className = "eau";
      block.traverser = false;
      block.destructible = false;
    }
    else if (random100() > 85 && blockGrid[0][0]) {
      block.style.backgroundImage = 'url(img/mur1.png)';
      block.traverser = false;
      block.destructible = false;
}
    // else if (random100() > 98 && blockGrid[0][0]) {
    //   fs.backgroundColor='aqua';
    //   foe.className = 'foe';
    //   foe.traverser = false;
    //   console.log(foe);
    // }

 else {
      block.style.backgroundImage = 'url(img/sol.png)';
      block.className = 'sol';
      block.traverser = true;
      block.destructible = true;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString() + 'px';
    block.style.marginTop = (j * GRID_SIZE).toString() + 'px';

    // fs.marginTop = (j * GRID_SIZE).toString() + 'px';
    // fs.marginLeft = (i * GRID_SIZE).toString() + 'px';



    // document.getElementById("plateau").appendChild(foe);
      // blockGrid[i].push(foe);
    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);

  }
}

var keyCode;

document.onkeydown = function(event) {
  var event = event || window.event;

  // if(!keyCode){

    keyCode = event.keyCode;

  // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, x et y.
  switch (keyCode) {

    case 38:
    startAnimationhaut();
      if (y > 0 && blockGrid[x][y - 1].traverser)
      y--;

      break;


    case 40:
    startAnimationbas();
      if (y < V_GRID - 1 && blockGrid[x][y + 1].traverser)
      y++;

      break;


    case 37:
    startAnimationdroite();
      if (x > 0 && blockGrid[x - 1][y].traverser)
      x--;

      break;


    case 39:
    startAnimationgauche();
      if (x < H_GRID - 1 && blockGrid[x + 1][y].traverser)
      x++;

      break;

    case 32 :
      creatBomb();

console.log("position :",x,y);
console.log("pos",blockGrid[i][x],blockGrid[i][y]);
      break;
}
// }
  // Et enfin on applique les modifications :;
  s.left = String(x * GRID_SIZE) + 'px';
  s.top = String(y * GRID_SIZE) + 'px';
}
// document.onkeyup = function(event) {
//   var event = event || window.event;
//
//
// if (event.keyCode == keyCode){
//
// keyCode = false ;
//
// stopAnimation();
//
// // pion.stop(!0,!0);
// }
//
//
//
//
// }
function random100() {
  return Math.floor(Math.random() * 100);
}
