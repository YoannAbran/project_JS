var bombs = [];

blockGrid[x][y].destructible = true;
blockGrid[x][y].traverser = false;

let bomb = document.createElement('div');
bomb.style.width = GRID_SIZE + "px";
bomb.style.height = GRID_SIZE + "px";
bomb.style.backgroundColor = 'black';
// bomb.style.backgroundSize = "contain"
bomb.style.position = 'absolute';

bomb.id = "bomb";
bomb.bombx = x;
bomb.bomby = y;


function creatBomb() {

  if (!document.getElementById("bomb")) {

    bomb.style.left = String(x * GRID_SIZE) + 'px';
    bomb.style.top = String(y * GRID_SIZE) + 'px';
    bomb.traverser = false;
    plateau.appendChild(bomb);
    bombs.push(bomb);


    setTimeout(disparitionBomb, 800);

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
        if(blockGrid[boomX][boomY - 1].destructible) {
            blockGrid[boomX][boomY - 1].style.backgroundImage = 'url(img/sol.png)';
            blockGrid[boomX][boomY - 1].traverser = true;
  console.log(boomY,boomX);
          }
}
      if (boomX < H_GRID -1){
          if (blockGrid[boomX + 1][boomY].destructible){
            blockGrid[boomX + 1][boomY].style.backgroundImage = 'url(img/sol.png)';
            blockGrid[boomX + 1][boomY].traverser = true;
console.log(boomY,boomX);
          }
}

        if (boomX > 0){
          if (blockGrid[boomX - 1][boomY].destructible ){
            blockGrid[boomX - 1][boomY].style.backgroundImage = 'url(img/sol.png)';
            blockGrid[boomX - 1][boomY].traverser = true;
            console.log(boomY,boomX);
          }
}
        if (boomY < V_GRID -1){
          if (blockGrid[boomX][boomY + 1].destructible ){
            blockGrid[boomX][boomY + 1].style.backgroundImage = 'url(img/sol.png)';
            blockGrid[boomX][boomY + 1].traverser = true;
        console.log(boomY,boomX);
  }
}

        }

      for (var i = 0; i < foes.length; i++) {

        if (parseInt(bomb.style.left) == foes[i].offsetLeft && parseInt(bomb.style.top) - GRID_SIZE == foes[i].offsetTop) {
          // console.log(bomb.style.left, bomb.style.top, foes[i].offsetLeft, foes[i].offsetTop);
          foes[i].remove();
          foes[i].traverser = true;
          console.log(foes[i].traverser);
        }

        if (parseInt(bomb.style.left) - GRID_SIZE == foes[i].offsetLeft && parseInt(bomb.style.top) == foes[i].offsetTop) {
          // console.log(bomb.style.left, bomb.style.top, foes[i].offsetLeft, foes[i].offsetTop);
          foes[i].remove();
          foes[i].traverser = true;
          console.log(foes[i].traverser);
        }
        if (parseInt(bomb.style.left) + GRID_SIZE == foes[i].offsetLeft && parseInt(bomb.style.top) == foes[i].offsetTop) {
          // console.log(bomb.style.left, bomb.style.top, foes[i].offsetLeft, foes[i].offsetTop);
          foes[i].remove();
          foes[i].traverser = true;
          console.log(foes[i].traverser);
        }
        if (parseInt(bomb.style.left) == foes[i].offsetLeft && parseInt(bomb.style.top) + GRID_SIZE == foes[i].offsetTop) {
          // console.log(bomb.style.left, bomb.style.top, foes[i].offsetLeft, foes[i].offsetTop);
          foes[i].remove();
          foes[i].traverser = true;
          console.log(foes[i].traverser);
        }
      }


      document.getElementById("bomb").remove();


    }

}
