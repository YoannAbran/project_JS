
var foes = []

for (var i = 0; i < 5; i++) {
  var foe = document.createElement('div');

let x = 0;
let y = 0;
while (!blockGrid[x][y].traverser || (x === 0 && y ===0)) {
x = Math.floor(Math.random() * (H_GRID))
y = Math.floor(Math.random() * (V_GRID))
}

blockGrid[x][y].traverser = false;

  foe.foeX = x;
  foe.foeY = y;
  foe.style.width = "40px";
  foe.style.height = "40px";
  foe.style.position = "absolute";
  foe.style.backgroundImage = "url(img/foe.png)";
  foe.style.left = String(foe.foeX * GRID_SIZE) + "px";
  foe.style.top = String(foe.foeY * GRID_SIZE) + "px";
  foe.style.zIndex = "1";
  plateau.appendChild(foe);
  foe.id = 'foe'+String(i);
  foes.push(foe);
}




setInterval(() => {
let stop = false;
    for (var i = 0; i < foes.length; i++) {

      let foe = foes[i];
      let foeX = foe.foeX
      let foeY = foe.foeY
      blockGrid[foeX][foeY].traverser = true ;

      switch (Math.floor(Math.random() * 4)) {

        case 0:
          if (foeY > 0 && blockGrid[foeX][foeY - 1].traverser)
            foeY--;
              startAnimationFoehaut();
          break;

        case 1:
          if (foeX < H_GRID - 1 && blockGrid[foeX + 1][foeY].traverser)
            foeX++;
            startAnimationFoegauche();
          break;

        case 2:
          if (foeY < V_GRID - 1 && blockGrid[foeX][foeY + 1].traverser)
            foeY++;
            startAnimationFoebas();
          break;

        case 3:
          if (foeX > 0 && blockGrid[foeX - 1][foeY].traverser)
            foeX--;
            startAnimationFoedroite();
          break;
      }



      foe.style.left = String(foeX * GRID_SIZE) + 'px';
      foe.style.top = String(foeY * GRID_SIZE) + 'px';

      foe.foeX = foeX
      foe.foeY = foeY

      blockGrid[foeX][foeY].traverser = false ;

    }


  },500);
