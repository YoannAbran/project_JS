const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;


var pion = document.getElementById('pion'),
  s = pion.style, // Un petit raccourci
  x = pion.offsetLeft, // On récupère la position absolue initiale.
  y = pion.offsetTop;

// var foe = document.getElementById('foe'),
//   fs = foe.style,
//   fX = foe.offsetLeft,
//   fY = foe.offsetTop,
//   direction = "right";

var foe = document.createElement('div');
fs = foe.style;
fs.width = '40px';
fs.height = '40px';
fs.display = 'flex';
fs.position = 'absolute';
fs.backgroundColor='aqua';
fs.zIndex ='1';
fX = foe.offsetLeft;
fY = foe.offsetTop;
direction = "right";
document.getElementById("plateau").appendChild(foe);

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;


var blockGrid = [];
for (var i = 0; i < H_GRID; i++) {
  blockGrid.push([]);

  for (var j = 0; j < V_GRID; j++) {

    let block = document.createElement('div');
    block.style.width = '40px';
    block.style.height = '40px';
    block.style.display = 'flex';
    block.style.backgroundSize = 'contain';
    block.style.position = 'absolute';

    if (random100() > 80 ) {
      block.className = "ventilation";
      block.traverser = false;

    } else if (random100() > 90 ) {
      block.style.backgroundImage = 'url(mur1.png)';
      block.traverser = false;
    }

 else {
      block.style.backgroundImage = 'url(sol.png)';
      block.traverser = true;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString() + 'px';
    block.style.marginTop = (j * GRID_SIZE).toString() + 'px';


    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);



  }
}

blockGrid[0][0].style.backgroundImage = 'url("sol.png")';
blockGrid[0][0].traverser = true;
blockGrid[1][0].style.backgroundImage = 'url("sol.png")';
blockGrid[1][0].traverser = true;
blockGrid[0][1].style.backgroundImage = 'url("sol.png")';
blockGrid[0][1].traverser = true;
blockGrid[H_GRID - 1][1].style.backgroundImage = 'url("sol.png")';
blockGrid[H_GRID - 1][1].traverser = true;
// document.getElementById("plateau").appendChild(foe);

// // //
//mouvement random enemy
var frame = 0;

function loop() {
  if (frame === 30) {
    switch (direction) {
      // Up
      case "left":
        if (fY > 0 && blockGrid[fX][fY - 1].traverser)
          fY--; // ou y-=40;
        break;
        // Right
      case "right":
        if (fX < H_GRID - 1 && blockGrid[fX + 1][fY].traverser)
          fX++;
        break;
        // Down
      case "up":
        if (fY < H_GRID - 1 && blockGrid[fX][fY + 1].traverser)
          fY++;
        break;
        // Left
      case "down":
        if (fX > 0 && blockGrid[fX - 1][fY].traverser)
          fX--;
        break;
    }
    fs.left = String(fX * GRID_SIZE) + 'px';
    fs.top = String(fY * GRID_SIZE) + 'px';

    let random = random100();

    if (random < 25) {
      direction = "left";
    }

    if (random >= 25 && random < 50) {
      direction = "right";
    }

    if (random >= 50 && random < 75) {
      direction = "up";
    }

    if (random > 75) {
      direction = "down";
    }

    frame = 0;
  }

  frame++;
  window.requestAnimationFrame(loop);
}
// 60 x / seconde
window.requestAnimationFrame(loop);


document.onkeydown = function(event) {
  var event = event || window.event,
    keyCode = event.keyCode;

  // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, x et y.
  switch (keyCode) {

    case 38:
      if (y > 0 && blockGrid[x][y - 1].traverser)
      y--;
      stopAnimation();
      startAnimationhaut();
      break;


    case 40:
      if (y < V_GRID - 1 && blockGrid[x][y + 1].traverser)
      y++;
      stopAnimation();
      startAnimationbas();
      break;


    case 37:
      if (x > 0 && blockGrid[x - 1][y].traverser)
      x--;
      stopAnimation();
      startAnimationdroite();
      break;


    case 39:
      if (x < H_GRID - 1 && blockGrid[x + 1][y].traverser)
      x++;
      stopAnimation();
      startAnimationgauche();
      break;

  }
  // Et enfin on applique les modifications :;


  s.left = String(x * GRID_SIZE) + 'px';
  s.top = String(y * GRID_SIZE) + 'px';
}

function randomColor() {
  return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function random100() {
  return Math.floor(Math.random() * 100);
}
