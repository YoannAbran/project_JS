var bombs = [];

blockGrid[x][y].destructible = true;
blockGrid[x][y].traverser = false;
let
bomb = document.createElement('div');
bomb.style.width = GRID_SIZE + "px";
bomb.style.height = GRID_SIZE + "px";
bomb.style.backgroundImage = 'url(img/boom.gif)';
bomb.style.backgroundSize = "contain"
bomb.style.position = 'absolute';
bomb.id="bomb";
bomb.bombx = x ;
bomb.bomby = y ;


function creatBomb(){

  if (!document.getElementById("bomb")) {

      bomb.style.left = String(x * GRID_SIZE) + 'px';
      bomb.style.top = String(y * GRID_SIZE) + 'px';

    plateau.appendChild(bomb);
    bombs.push(bomb);


    setTimeout(disparitionBomb, 800);
    bomb.bombx = x ;
    bomb.bomby = y ;

      }
  }

  function disparitionBomb(){
    if (document.getElementById("bomb")) {

      for (var i = 0; i < bombs.length; i++) {

        let boomX = bomb.bombx;
            boomY = bomb.bomby;
            blockGrid[boomX][boomY].destructible = false;
            blockGrid[boomX][boomY].traverser = true;

            var boom = blockGrid[boomX][boomY];

        if (boomY > 0 && blockGrid[boomX][boomY - 1].destructible)
        blockGrid[boomX][boomY - 1].remove();
        blockGrid[boomX][boomY-1].traverser = true;
        console.log(boomY,boomX, boom);


        if (boomY < H_GRID - 1 && blockGrid[boomX + 1][boomY].destructible)
        blockGrid[boomX + 1][boomY].remove();
        blockGrid[boomX + 1][boomY].traverser = true;
        console.log(boomY,boomX, boom);


        if (boomY < V_GRID - 1 && blockGrid[boomX][boomY + 1].destructible )
        blockGrid[boomX][boomY + 1].remove();
        blockGrid[boomX][boomY + 1].traverser = true;
        console.log(boomY,boomX, boom);


        if (boomX > 0 && blockGrid[boomX - 1][boomY].destructible)
        blockGrid[boomX - 1][boomY].remove();
        blockGrid[boomX - 1][boomY].traverser = true;

        console.log(boomY,boomX, boom);

    }
  document.getElementById("bomb").remove();
  }
  }
  // blockGrid.splice(blockGrid.indexOf(blockGrid[i]), 1);



  // blockGrid[boomX][boomY].traverser = false;
