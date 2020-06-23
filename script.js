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




// document.getElementById("plateau").appendChild(foe);



var blockGrid = [];
for (var i = 0; i < H_GRID; i++) {
  blockGrid.push([]);

  for (var j = 0; j < V_GRID; j++) {



    let block = document.createElement('div');
    block.style.width = '40px';
    block.style.height = '40px';
    block.style.backgroundSize = 'contain';
    block.style.position = 'absolute';

 if (random100() > 90 && blockGrid[0][0] ) {
      block.className = "eau";
      block.traverser = false;

    } else if (random100() > 90 && blockGrid[0][0]) {
      block.style.backgroundImage = 'url(img/mur1.png)';
      block.traverser = false;
    }

 else {
      block.style.backgroundImage = 'url(img/sol.png)';
      block.traverser = true;
    }

    block.style.marginLeft = (i * GRID_SIZE).toString() + 'px';
    block.style.marginTop = (j * GRID_SIZE).toString() + 'px';

  ;
    // document.getElementById("plateau").appendChild(foe);
    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);


  }
}

blockGrid[0][0].style.backgroundImage = 'url("img/sol.png")';
blockGrid[0][0].traverser = true;
blockGrid[1][0].style.backgroundImage = 'url("img/sol.png")';
blockGrid[1][0].traverser = true;
blockGrid[0][1].style.backgroundImage = 'url("img/sol.png")';
blockGrid[0][1].traverser = true;

// document.getElementById("plateau").appendChild(foe);

// // //

// mouvement random enemy

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

      startAnimationbas();
      break;


    case 37:
      if (x > 0 && blockGrid[x - 1][y].traverser)
      x--;

      startAnimationdroite();
      break;


    case 39:
      if (x < H_GRID - 1 && blockGrid[x + 1][y].traverser)
      x++;

      startAnimationgauche();
      break;

    case 32 :
      creatBomb();
      break;

  }
  // Et enfin on applique les modifications :;
  s.left = String(x * GRID_SIZE) + 'px';
  s.top = String(y * GRID_SIZE) + 'px';
}


function random100() {
  return Math.floor(Math.random() * 100);
}
