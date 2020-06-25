var foes = [];

for (var i = 0; i < 5; i++) {
  var foe = document.createElement('div');
  foe.className = 'foe';
  fs = foe.style;
  fs.width = GRID_SIZE + 'px';
  fs.height = GRID_SIZE + 'px';
  fs.position = 'absolute';
  fs.zIndex = '1';
  fs.backgroundColor = 'aqua';
  fX = foe.offsetTop;
  fY = foe.offsetLet;
  fs.left = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
  fs.top = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
  console.log(fs.top, fs.left);
  direction = "right";
  plateau.appendChild(foe);
  foes.push(foe);
}
console.log(foes);

// count = 0;
// while (count < 5) {
//
//   var foe = document.createElement('div');
//   foe.className = 'foe';
//   fs = foe.style;
//   fs.width = GRID_SIZE + 'px';
//   fs.height = GRID_SIZE + 'px';
//   fs.position = 'absolute';
//   fs.zIndex = '1';
//   fs.backgroundColor = 'aqua';
//   fX = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
//   fY = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
//   direction = "right";
//
//   found = false;
//
//   for (var i = 0; i < blockGrid.length; i++) {
//     if (fX == blockGrid[i].x && fY == blockGrid[i].y) {
//       found = true;
//       break;
//     }
//   }
//   if (found) {
//     continue;
//   }
//   found = false;
//
//   for (var i = 0; i < foes.length; i++) {
//     if (fX == foes[i].x && fY == foes[i].y) {
//       found = true;
//       break;
//     }
//   }
//   if (found) {
//     continue;
//   }
//   for (var i = 0; i < foes.length; i++) {
//     foe[i]
//   }
//   fs.left = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
//   fs.top = (Math.floor(Math.random() * 16) * GRID_SIZE) + "px";
//
//   plateau.appendChild(foe);
//   foes.push(foe);
//
//   count++;
// }









function movement() {

  for (var i = 0; i < foes.length; i++) {

    let counter = 0,
      n = 1;
    while (counter < n) {



      let fX = foes[i].offsetTop;
      fY = foes[i].offsetLeft;



      switch (Math.floor(Math.random() * 4)) {

        // left
        case 0:
          if (fY > 0 && blockGrid[fX][fY - 1].traverser)
            fY--; // ou y-=40;

          break;
          // right
        case 1:
          if (fX < H_GRID - 1 && blockGrid[fX + 1][fY].traverser)
            fX++;

          break;
          // up
        case 2:
          if (fY < V_GRID - 1 && blockGrid[fX][fY + 1].traverser)
            fY++;

          break;
          // down
        case 3:
          if (fX > 0 && blockGrid[fX - 1][fY].traverser)
            fX--;

          break;

      }

      counter++;

      foes[i].style.left = String(fX + GRID_SIZE) + 'px';
      foes[i].style.top = String(fY + GRID_SIZE) + 'px';
      console.log("position : ", foes[i].offsetLeft, foes[i].offsetTop);

    }

  }
  let callMovement = setTimeout(movement, 1000);
  // setInterval(movement(),1000);

}
movement();






function minMaxRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
