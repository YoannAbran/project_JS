const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
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

// const foe = document.querySelector('#foe'),
// fs = foe.style, // Un petit raccourci
// fx = 0, // On récupère la position absolue initiale.
// fy = 0;
// setInterval(() => {
//    fs.left= getRandom(0, 800-40)+'px'; // 👈🏼 Horizontally
//    fs.top = getRandom(0, 800-40)+'px'; // 👈🏼 Vertically
// }, 500); // every 1/2 second

//enemy div
var foe = document.getElementById('foe'),
        fs = foe.style,
        fX = foe.offsetLeft,
        fY = foe.offsetTop,
        direction = "right";

    //laisser libre les bloc proche du joueur
    blockGrid[0][0].style.backgroundImage = 'url("sol.png")';
blockGrid[0][0].traverser = true;
blockGrid[1][0].style.backgroundImage = 'url("sol.png")';
blockGrid[1][0].traverser = true;
blockGrid[0][1].style.backgroundImage = 'url("sol.png")';
blockGrid[0][1].traverser = true;
blockGrid[H_GRID - 1][1].style.backgroundImage = 'url("sol.png")';
blockGrid[H_GRID - 1][1].traverser = true;


//mouvement random enemy
var frame = 0;

function loop() {
  if (frame === 60) {
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
window.requestAnimationFrame(loop)
