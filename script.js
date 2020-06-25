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

    }
    else if (random100() > 90 && blockGrid[0][0]) {
      block.style.backgroundImage = 'url(img/mur1.png)';
      block.traverser = false;
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

document.onkeydown = function(event) {
  var event = event || window.event,
    keyCode = event.keyCode;

  // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, x et y.
  switch (keyCode) {

    case 38:
      if (y > 0 && blockGrid[x][y - 1].traverser)
      y--;
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


// const FOE = document.querySelectorAll('.foe');
// // console.log(FOE.length);
//
// function movement(){
//
//   for (var i=0; i<FOE.length;i++) {
//
//     // if(fX == foe[i].offsetLeft && fY == foe[i].offsetTop){
//     let counter = 0,
//     n=10;
//
//     while(counter < n){
//
//   counter++;
//
//   fX = FOE[i].left;
//   fY = FOE[i].top;
//   // console.log(fX,fY);
//
//   switch (Math.floor(Math.random() * 4)) {
//
//     // left
//     case 0:
//       if (fY > 0 && blockGrid[fX][fY - 1].traverser)
//         fY--; // ou y-=40;
//         console.log("up",fY);
//       break;
//       // right
//     case 1:
//       if (fX < H_GRID - 1 && blockGrid[fX + 1][fY].traverser)
//         fX++;
//         console.log("right",fX);
//       break;
//       // up
//     case 2:
//       if (fY < V_GRID - 1 && blockGrid[fX][fY + 1].traverser)
//         fY++;
//         console.log("down",fY);
//       break;
//       // down
//     case 3:
//       if (fX > 0 && blockGrid[fX - 1][fY].traverser)
//         fX--;
//         console.log("left",fX);
//       break;
//
//   }




  // let random = random100();
  // if (random < 25) {
  //   direction = "left";
  // }
  // if (random >= 25 && random < 50) {
  //   direction = "right";
  // }
  // if (random >= 50 && random < 75) {
  //   direction = "up";
  // }
  // if (random > 75) {
  //   direction = "down";
  //
  // }
//   FOE[i].style.offsetLeft = String(fX* GRID_SIZE) + 'px';
//   FOE[i].style.offsetTop = String(fY* GRID_SIZE) + 'px';
//   // console.log("position : " ,FOE[i].offsetLeft,FOE[i].offsetTop);
//
// }
//
// }
// let callMovement = setTimeout(movement,1000);
// // setInterval(movement(),1000);
//
// }
// movement();




function random100() {
  return Math.floor(Math.random() * 100);
}
