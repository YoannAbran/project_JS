const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;


var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;
plateau.style.border = "50px solid";
plateau.style.borderImage = "url('img/border.png') 40 round";

var pion = document.getElementById('pion'),
  s = pion.style, // Un petit raccourci
  x = pion.offsetLeft, // On récupère la position absolue initiale.
  y = pion.offsetTop;


var blockGrid = [];
for (var i = 0; i < H_GRID; i++) {
  blockGrid.push([]);

  for (var j = 0; j < V_GRID; j++) {


    let block = document.createElement('div');
    block.style.width = '40px';
    block.style.height = '40px';
    block.style.backgroundSize = 'contain';
    block.style.position = 'absolute';

    if (random100() > 90 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2) && i < H_GRID && j >= 0 && j <= 1 || i >= 0 && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2) && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) {
      block.style.backgroundImage = 'url(img/arbre.png)';
      block.traverser = false;
      block.destructible = false;

    } else if (random100() > 90 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2) && i < H_GRID && j >= 0 && j <= 1 || i >= 0 && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2) && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) {
      block.style.backgroundImage = 'url(img/pierre.png)';
      block.traverser = false;
      block.destructible = false;

    } else if (random100() > 85 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2) && i < H_GRID && j >= 0 && j <= 1 || i >= 0 && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2) && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) {
      block.style.backgroundImage = 'url(img/fleur.png)';
      block.traverser = false;
      block.destructible = true;

    } else if (random100() > 85 && !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2) && i < H_GRID && j >= 0 && j <= 1 || i >= 0 && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2) && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) {
      block.style.backgroundImage = 'url(img/feuille.png)';
      block.traverser = false;
      block.destructible = true;
    } else {
      block.style.backgroundImage = 'url(img/sol1.png)';
      block.className = 'sol';
      block.traverser = true;
      block.destructible = false;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString() + 'px';
    block.style.marginTop = (j * GRID_SIZE).toString() + 'px';

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);

  }
}

var keyCode;

document.onkeydown = function(event) {
  var event = event || window.event;



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

    case 32:
      creatBomb();
      startAnimationBomb();
      break;
  }
  for (var i = 0; i < foes.length; i++) {
    if (x * GRID_SIZE == foes[i].offsetLeft && y * GRID_SIZE == foes[i].offsetTop) {
      console.log(x * GRID_SIZE, y * GRID_SIZE, foes[i].offsetLeft, foes[i].offsetTop);
      document.getElementById('pion').remove();
      alert("Game over !!");
      document.location.reload(true);
      break;
    }
  }
  // Et enfin on applique les modifications :;
  s.left = String(x * GRID_SIZE) + 'px';
  s.top = String(y * GRID_SIZE) + 'px';

}

function random100() {
  return Math.floor(Math.random() * 100);
}
