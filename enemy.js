var foes = []

for (var i = 0; i <getRandomInt() ; i++) {
  var foe = document.createElement('div');

  let x = 0;
  let y = 0;
  while (!blockGrid[x][y].traverser || (x === 0 && y === 0)) {
    x = Math.floor(Math.random() * (H_GRID))
    y = Math.floor(Math.random() * (V_GRID))
  }

  foe.foeX = x;
  foe.foeY = y;
  foe.style.width = "40px";
  foe.style.height = "40px";
  foe.style.position = "absolute";

if (random100() > 50){
  foe.style.backgroundImage = "url(img/bas.gif)";
  foe.style.backgroundPosition = "center";
  foe.style.backgroundSize = "cover";
  foe.className = "tichon";
  tichon = document.getElementsByClassName("tichon");
}
else {
  foe.style.backgroundImage = "url(img/bas2.gif)";
  foe.style.backgroundPosition = "center";
  foe.style.backgroundSize = "cover";
  foe.className = "raffl";
  raffl = document.getElementsByClassName("raffl");

}
  foe.style.left = String(foe.foeX * GRID_SIZE) + "px";
  foe.style.top = String(foe.foeY * GRID_SIZE) + "px";
  foe.style.zIndex = "1";
  foe.destructible = true;

  plateau.appendChild(foe);
  foe.id = 'foe' + String(i);
  foes.push(foe);
}


console.log(tichon);
setInterval(() => {
  // let stop = false;
  for (var i = 0; i < foes.length; i++) {

    var foe = foes[i];
    foeX = foe.foeX
    foeY = foe.foeY
    blockGrid[foeX][foeY].traverser = true;

    tichon = document.getElementsByClassName("tichon");
    raffl = document.getElementsByClassName("raffl");

    for (var t = 0; t < tichon.length; t++) {
      var tichon = tichon[t];
    };
    for (var r = 0; r < raffl.length; r++) {
      var raffl = raffl[r];
    };

    switch (Math.floor(Math.random() * 4)) {

      case 0:
      if (foeY > 0 && blockGrid[foeX][foeY - 1].traverser)
        foeY--;
            tichon.style.backgroundImage = "url(img/haut.gif)"
              raffl.style.backgroundImage = "url(img/haut2.gif)";
        break;

      case 1:
      if (foeX < H_GRID - 1 && blockGrid[foeX + 1][foeY].traverser)
        foeX++;
            tichon.style.backgroundImage = "url(img/droite.gif)";
            raffl.style.backgroundImage = "url(img/droite2.gif)";
        break;

      case 2:
      if (foeY < V_GRID - 1 && blockGrid[foeX][foeY + 1].traverser)
        foeY++;
          tichon.style.backgroundImage = "url(img/bas.gif)";
            raffl.style.backgroundImage = "url(img/bas2.gif)";
        break;

      case 3:
      if (foeX > 0 && blockGrid[foeX - 1][foeY].traverser)
        foeX--;
            tichon.style.backgroundImage = "url(img/gauche.gif)";
              raffl.style.backgroundImage = "url(img/gauche2.gif)";
        break;

    }

    if (pion.offsetLeft == foeX * GRID_SIZE && pion.offsetTop == foeY * GRID_SIZE) {
      console.log(x * GRID_SIZE, y * GRID_SIZE, foes[i].offsetLeft, foes[i].offsetTop);
      document.getElementById('pion').remove();
      setTimeout(gameOver,500);
      break;
    }

    foe.style.left = String(foeX * GRID_SIZE) + 'px';
    foe.style.top = String(foeY * GRID_SIZE) + 'px';

    foe.foeX = foeX
    foe.foeY = foeY

    blockGrid[foeX][foeY].traverser = true;

  }
}, 1000);


function getRandomInt(min, max) {
  min = 3;
  max = 15;
  return Math.floor(Math.random() * (max - min)) + min;
}
