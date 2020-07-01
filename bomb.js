var bombs = [];

blockGrid[x][y].destructible = true;
blockGrid[x][y].traverser = false;

let bomb = document.createElement('div');
bomb.style.width = GRID_SIZE + "px";
bomb.style.height = GRID_SIZE + "px";
bomb.style.backgroundImage = 'url(img/ball.png)';
bomb.style.position = 'absolute';

bomb.id = "bomb";
bomb.bombx = x;
bomb.bomby = y;

let explosions = [];
for (var i = 0; i < 4; i++) {
  var explosion = document.createElement("div");
  explosion.style.width = GRID_SIZE + "px";
  explosion.style.height = GRID_SIZE + "px";
  explosion.style.position = "absolute";
  explosion.style.backgroundRepeat = "no-repeat";
  explosion.style.backgroundSize = "auto";
  explosion.style.backgroundPosition = "center";
  explosion.style.zIndex = "100";
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
          blockGrid[boomX][boomY - 1].style.backgroundImage = 'url(img/sol.png)';
          blockGrid[boomX][boomY - 1].traverser = true;
        }
      }
      if (boomX < H_GRID - 1) {
        if (blockGrid[boomX + 1][boomY].destructible) {
          blockGrid[boomX + 1][boomY].style.backgroundImage = 'url(img/sol.png)';
          blockGrid[boomX + 1][boomY].traverser = true;
        }
      }

      if (boomX > 0) {
        if (blockGrid[boomX - 1][boomY].destructible) {
          blockGrid[boomX - 1][boomY].style.backgroundImage = 'url(img/sol.png)';
          blockGrid[boomX - 1][boomY].traverser = true;
        }
      }
      if (boomY < V_GRID - 1) {
        if (blockGrid[boomX][boomY + 1].destructible) {
          blockGrid[boomX][boomY + 1].style.backgroundImage = 'url(img/sol.png)';
          blockGrid[boomX][boomY + 1].traverser = true;
        }
      }
  for (var i = 0; i < explosions.length; i++) {


      if (boomY > 0) {
        setTimeout(
        blockGrid[boomX][boomY - 1]=plateau.appendChild(explosion),2000);
        document.getElementById("explosion").remove();

      }

      if (boomX < H_GRID - 1) {
        setTimeout(
        blockGrid[boomX + 1][boomY]=plateau.appendChild(explosion),2000);
        document.getElementById("explosion").remove();
      }

      if (boomX > 0) {
      setTimeout(
        blockGrid[boomX - 1][boomY]=plateau.appendChild(explosion),2000);
        document.getElementById("explosion").remove();
      }

      if (boomY < V_GRID - 1) {
      setTimeout(
      blockGrid[boomX][boomY + 1]=plateau.appendChild(explosion),2000);
      document.getElementById("explosion").remove();
      }
    }
    }

    for (var i = 0; i < foes.length; i++) {

      if (parseInt(bomb.style.left) == foes[i].offsetLeft && parseInt(bomb.style.top) - GRID_SIZE == foes[i].offsetTop) {
        foes[i].remove();
        foes.splice(i,1);
      }

      if (parseInt(bomb.style.left) - GRID_SIZE == foes[i].offsetLeft && parseInt(bomb.style.top) == foes[i].offsetTop) {
        foes[i].remove();
          foes.splice(i,1);
      }
      if (parseInt(bomb.style.left) + GRID_SIZE == foes[i].offsetLeft && parseInt(bomb.style.top) == foes[i].offsetTop) {
        foes[i].remove();
          foes.splice(i,1);
      }
      if (parseInt(bomb.style.left) == foes[i].offsetLeft && parseInt(bomb.style.top) + GRID_SIZE == foes[i].offsetTop) {
        foes[i].remove();
          foes.splice(i,1);
      }
    }

    for (var i = 0; i < GRID_SIZE; i++) {
      // Top
      if (parseInt(bomb.style.left) == parseInt(s.left) && parseInt(bomb.style.top) - GRID_SIZE == parseInt(s.top)) {
        document.getElementById('pion').remove();
        alert("Game over !!");
        document.location.reload(true);
        break;
      }

      if (parseInt(bomb.style.left) - GRID_SIZE == parseInt(s.left) && parseInt(bomb.style.top) == parseInt(s.top)) {
        document.getElementById('pion').remove();
        alert("Game over !!");
        document.location.reload(true);
        break;
      }

      if (parseInt(bomb.style.left) + GRID_SIZE == parseInt(s.left) && parseInt(bomb.style.top) == parseInt(s.top)) {
        document.getElementById('pion').remove();
        alert("Game over !!");
        document.location.reload(true);
        break;
      }

      if (parseInt(bomb.style.left) == parseInt(s.left) && parseInt(bomb.style.top) + GRID_SIZE == parseInt(s.top)) {
        document.getElementById('pion').remove();
        alert("Game over !!");
        document.location.reload(true);
        break;
      }

    }
    document.getElementById("bomb").remove();
    blockGrid[boomX][boomY].traverser = true;

  }

}




// var boomX = bomb.bombx;
// var boomY = bomb.bomby;
//
// var explosion0 = explosions[0];
// explosion0.style.left = String(boomX * GRID_SIZE + 40) + 'px';
// explosion0.style.top = String(boomY * GRID_SIZE) + 'px';
//
// var explosion1 = explosions[1];
// explosion1.style.left = String(boomX * GRID_SIZE) + 'px';
// explosion1.style.top = String(boomY * GRID_SIZE + 40) + 'px';
//
// var explosion2 = explosions[2];
// explosion2.style.left = String(boomX * GRID_SIZE - 40) + 'px';
// explosion2.style.top = String(boomY * GRID_SIZE) + 'px';
//
// var explosion3 = explosions[3];
// explosion3.style.left = String(boomX * GRID_SIZE) + 'px';
// explosion3.style.top = String(boomY * GRID_SIZE - 40) + 'px';
//
// if (!((boomX * GRID_SIZE - 40) < 0)) {
//   document.getElementById("plateau").appendChild(explosion2);
//
// }
// if (!((boomX * GRID_SIZE + 40) > 760)) {
//   document.getElementById("plateau").appendChild(explosion0);
//
//
// }
// if (!((boomY * GRID_SIZE - 40) < 0)) {
//   document.getElementById("plateau").appendChild(explosion3);
//
// }
// if (!((boomY * GRID_SIZE + 40) > 760)) {
//   document.getElementById("plateau").appendChild(explosion1);
//
// }
