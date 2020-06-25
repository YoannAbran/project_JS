// test with array
// const SOL = document.querySelectorAll('.sol');
//
// let solFoe = [];
//
// // console.log(SOL);
//
// for (var i = 0; i < 5; i++) {
// solFoe.push([]);
// for (var j = 0; j <5; j++){
//   let foe = document.createElement('div');
// foe.id= "foe"+ String(i);
//   fs = foe.style;
//   fs.width = GRID_SIZE +'px';
//   fs.height = GRID_SIZE +'px';
//   fs.position = 'absolute';
//   fs.zIndex ='1';
//   direction = "right";
//
//
//        fs.backgroundColor='aqua';
//       foe.traverser = false;
//
// fs.marginTop = (j * GRID_SIZE).toString() + 'px';
// fs.marginLeft = (i * GRID_SIZE).toString() + 'px';
//   fX = foe.offsetLeft;
//   fY = foe.offsetTop;
//   document.getElementById("plateau").appendChild(foe);
//   solFoe.push(foe);
//
//   console.log(foe);
//   console.log(solFoe);
// }
//   }
var foes = [];
//
// for (var i = 0; i < 5; i++) {
//   var foe = document.createElement('div');
//   foe.className = 'foe';
//   fs = foe.style;
//   fs.width = GRID_SIZE + 'px';
//   fs.height = GRID_SIZE + 'px';
//   fs.position = 'absolute';
//   fs.zIndex = '1';
//   fs.backgroundColor = 'aqua';
//   fX = foe.offsetTop;
//   fY = foe.offsetLet;
// //
//   fs.left = (Math.floor(Math.random() * 16) * GRID_SIZE)+"px";
//   fs.top = (Math.floor(Math.random() * 16) * GRID_SIZE)+"px";
//   console.log(fs.top,fs.left);
// direction = "right";
//   plateau.appendChild(foe);
//   foes.push(foe);
// }
// console.log(foes);

count = 0;
while (count < 5) {

  var foe = document.createElement('div');
  foe.className = 'foe';
  fs = foe.style;
  fs.width = GRID_SIZE + 'px';
  fs.height = GRID_SIZE + 'px';
  fs.position = 'absolute';
  fs.zIndex = '1';
  fs.backgroundColor = 'aqua';
  fX = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
  fY = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
  direction = "right";

  found = false;

  for (var i = 0; i < blockGrid.length; i++) {
    if (fX == blockGrid[i].x && fY == blockGrid[i].y) {
      found = true;
      break;
    }
  }
  if (found) {
    continue;
  }
  found = false;

  for (var i = 0; i < foes.length; i++) {
    if (fX == foes[i].x && fY == foes[i].y) {
      found = true;
      break;
    }
  }
  if (found) {
    continue;
  }
  for (var i = 0; i < foes.length; i++) {
    foe[i]
  }
  fs.left = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
  fs.top = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";

  plateau.appendChild(foe);
  foes.push(foe);

  count++;
}


for (var i = 0; i < foes.length; i++) {
  console.log(foes[i].offsetLeft, foes[i].offsetTop);
}

var foess = document.querySelectorAll(".foe");

function movement() {
  for (var i = 0; i < foess.length; i++) {

      let x = foess[i].offsetLeft,
      y = foess[i].offsetTop;

      switch (Math.floor(Math.random() * 4)) {

        // left
        case 0:
          y--; // ou y-=40;
          break;
          // right
        case 1:
          x++;
          break;
          // up
        case 2:
          y++;
          break;
          // down
        case 3:
          x--;
          break;
      }
      fs.left = String(x * GRID_SIZE) + 'px';
      fs.top = String(y * GRID_SIZE) + 'px';
      console.log(x, y);
  }
  let callMovement = setTimeout(movement, 1000);
}
movement();






// setInterval(() => {
//    //method setInterval
//
//     switch (direction) {
//       // left
//       case "left":
//         if (fY > 0 && blockGrid[fX][fY - 1])
//           fY--; // ou y-=40;
//         break;
//         // right
//       case "right":
//         if (fX < H_GRID - 1 && blockGrid[fX + 1][fY])
//           fX++;
//         break;
//         // up
//       case "up":
//         if (fY < V_GRID - 1 && blockGrid[fX][fY + 1])
//           fY++;
//         break;
//         // down
//       case "down":
//         if (fX > 0 && blockGrid[fX - 1][fY])
//           fX--;
//         break;
//     }
//
//     fs.left = String(fX * GRID_SIZE ) + 'px';
//     fs.top = String(fY * GRID_SIZE ) + 'px';
//
//     let random = random100();
//     if (random < 25) {
//       direction = "left";
//     }
//     if (random >= 25 && random < 50) {
//       direction = "right";
//     }
//     if (random >= 50 && random < 75) {
//       direction = "up";
//     }
//     if (random > 75) {
//       direction = "down";
//       console.log("position : ",fX,fY);
//     }
//   }, 1000);

function minMaxRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
