var bombs = [];

blockGrid[x][y].destructible = true;
blockGrid[x][y].traverser = false;

let bomb = document.createElement('div');
bomb.style.width = GRID_SIZE + "px";
bomb.style.height = GRID_SIZE + "px";
bomb.style.backgroundImage = 'url(img/pokeballs.png)';
bomb.style.position = 'absolute';

bomb.id = "bomb";
bomb.bombx = x;
bomb.bomby = y;

let explosions = [];

for (var i = 0; i < 5; i++) {
  var explosion = document.createElement("div");
  explosion.style.width = GRID_SIZE + "px";
  explosion.style.height = GRID_SIZE + "px";
  explosion.style.position = "absolute";
  explosion.style.backgroundRepeat = "no-repeat";
  explosion.style.backgroundSize = "auto";
  explosion.style.backgroundPosition = "center";
  explosion.style.zIndex = "1";
  explosion.style.backgroundImage = "url('img/explo.png')";
  explosion.id = "explosion" + String(i);
  explosions.push(explosion);
}


function creatBomb() {

  if (!document.getElementById("bomb")) {

    bomb.style.left = String(x * GRID_SIZE) + 'px';
    bomb.style.top = String(y * GRID_SIZE) + 'px';
    blockGrid[x][y].traverser = false;
    plateau.appendChild(bomb);
    bombs.push(bomb);

    setTimeout(disparitionBomb, 1000);

    setTimeout(disparitionexplo0, 1200);
    setTimeout(disparitionexplo1, 1200);
    setTimeout(disparitionexplo2, 1200);
    setTimeout(disparitionexplo3, 1200);
    setTimeout(disparitionexplo4, 1200);

    bomb.bombx = x;
    bomb.bomby = y;
  }
}

function disparitionBomb() {
  if (document.getElementById("bomb")) {

    for (var i = 0; i < bombs.length; i++) {

      var boomX = bomb.bombx;
      var boomY = bomb.bomby;
      bomb.traverser = false;


      if (boomY > 0) {
        if (blockGrid[boomX][boomY - 1].destructible) {
          blockGrid[boomX][boomY - 1].style.backgroundImage = 'url(img/sol1.png)';
          blockGrid[boomX][boomY - 1].traverser = true;
        }
      }
      if (boomX < H_GRID - 1) {
        if (blockGrid[boomX + 1][boomY].destructible) {
          blockGrid[boomX + 1][boomY].style.backgroundImage = 'url(img/sol1.png)';
          blockGrid[boomX + 1][boomY].traverser = true;
        }
      }

      if (boomX > 0) {
        if (blockGrid[boomX - 1][boomY].destructible) {
          blockGrid[boomX - 1][boomY].style.backgroundImage = 'url(img/sol1.png)';
          blockGrid[boomX - 1][boomY].traverser = true;
        }
      }
      if (boomY < V_GRID - 1) {
        if (blockGrid[boomX][boomY + 1].destructible) {
          blockGrid[boomX][boomY + 1].style.backgroundImage = 'url(img/sol1.png)';
          blockGrid[boomX][boomY + 1].traverser = true;
        }
      }
    }

    for (var i = 0; i < foes.length; i++) {

      if (parseInt(bomb.style.left) == foes[i].offsetLeft && parseInt(bomb.style.top) - GRID_SIZE == foes[i].offsetTop) {
        foes[i].remove();
        foes.splice(i, 1);
        break;
        console.log(foes);
      }

      if (parseInt(bomb.style.left) - GRID_SIZE == foes[i].offsetLeft && parseInt(bomb.style.top) == foes[i].offsetTop) {
        foes[i].remove();
        foes.splice(i, 1);
        break;
        console.log(foes[i]);
      }


      if (parseInt(bomb.style.left) + GRID_SIZE == foes[i].offsetLeft && parseInt(bomb.style.top) == foes[i].offsetTop) {
        foes[i].remove();
        foes.splice(i, 1);
        break;
        console.log(foes[i]);
      }


      if (parseInt(bomb.style.left) == foes[i].offsetLeft && parseInt(bomb.style.top) + GRID_SIZE == foes[i].offsetTop) {
        foes[i].remove();
        foes.splice(i, 1);
        break;
        console.log(foes[i]);
      }

    }



      if (boomX == x && boomY  == y- 1) {
        document.getElementById('pion').remove();
          setTimeout(gameOver,500);
      }

      if (boomX  == x- 1 && boomY == y) {
        document.getElementById('pion').remove();
          setTimeout(gameOver,500);
      }

      if (boomX == x + 1 && boomY == y) {
        document.getElementById('pion').remove();
          setTimeout(gameOver,500);

      }

      if (boomX == x && boomY == y + 1) {
        document.getElementById('pion').remove();
          setTimeout(gameOver,500);

      }

    if (boomY > 0) {
      var explosion0 = explosions[0];
      explosion0.style.left = String(boomX * GRID_SIZE) + 'px';
      explosion0.style.top = String(boomY * GRID_SIZE - GRID_SIZE) + 'px';
      plateau.appendChild(explosion0);
    }

    if (boomX < H_GRID - 1) {
      var explosion1 = explosions[1];
      explosion1.style.left = String(boomX * GRID_SIZE + GRID_SIZE) + 'px';
      explosion1.style.top = String(boomY * GRID_SIZE) + 'px';
      plateau.appendChild(explosion1);
    }

    if (boomX > 0) {
      var explosion2 = explosions[2];
      explosion2.style.left = String(boomX * GRID_SIZE - GRID_SIZE) + 'px';
      explosion2.style.top = String(boomY * GRID_SIZE) + 'px';
      plateau.appendChild(explosion2);
    }

    if (boomY < V_GRID - 1) {
      var explosion3 = explosions[3];
      explosion3.style.left = String(boomX * GRID_SIZE) + 'px';
      explosion3.style.top = String(boomY * GRID_SIZE + GRID_SIZE) + 'px';
      plateau.appendChild(explosion3);
    }

    var explosion4 = explosions[4];
    explosion4.style.left = String(boomX * GRID_SIZE) + 'px';
    explosion4.style.top = String(boomY * GRID_SIZE) + 'px';
    plateau.appendChild(explosion4);

  }
  document.getElementById("bomb").remove();
  blockGrid[boomX][boomY].traverser = true;

  setTimeout(victory,500)
}

function disparitionexplo0() {
  if (document.getElementById("explosion0")) {
    explosion0.remove();
  }
}

function disparitionexplo1() {
  if (document.getElementById("explosion1")) {
    explosion1.remove();
  }
}

function disparitionexplo2() {
  if (document.getElementById("explosion2")) {
    explosion2.remove();
  }
}

function disparitionexplo3() {
  if (document.getElementById("explosion3")) {
    explosion3.remove();
  }
}

function disparitionexplo4() {
  if (document.getElementById("explosion4")) {
    explosion4.remove();
  }
}


function gameOver() {
  alert("Game over !!");
  document.location.reload(true);
}
function victory(){
  if (foes.length == 0) {
    alert("Gagné !!");
    document.location.reload(true);
    return;
  }
}
