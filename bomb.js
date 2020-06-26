bombs = [];
let bomb = document.createElement('div');
bomb.style.width = GRID_SIZE + "px";
bomb.style.height = GRID_SIZE + "px";
bomb.style.backgroundImage = 'url(img/boom.gif)';
bomb.style.backgroundSize = "contain"
bomb.style.position = 'absolute';
bomb.id="bomb";
bomb.x = x ;
bomb.y = y ;

function creatBomb(){

  if (!document.getElementById("bomb")) {
      bomb.style.left = String(x * GRID_SIZE) + 'px';
      bomb.style.top = String(y * GRID_SIZE) + 'px';

      document.getElementById("plateau").appendChild(bomb);

      setTimeout(disparitionBomb, 800);
      }
  }


  function disparitionBomb(){
    if (document.getElementById("bomb")) {

      for (var i = 0; i < bombs.length; i++) {

        var boom = bombs[i];
        var boomX = bomb.x;
        var boomY = bomb.Y;
        blockGrid[boomX][boomY].traverser = true ;

        if (boomY > 0 && blockGrid[boomX][boomY - 1].traverser || boomX < H_GRID - 1 && blockGrid[boomX + 1][boomY].traverser || boomY < V_GRID - 1 && blockGrid[boomX][boomY + 1].traverser|| boomX > 0 && blockGrid[boomX - 1][boomY].traverser ){




    }

    }

  document.getElementById("bomb").remove();
  blockGrid[boomX].remove();
  blockGrid.splice(blockGrid.indexOf(blockGrid[i]), 1);

  }
console.log(blockGrid[boomX][boomY]);
  }

// function boom(){
//
//   for (let i = 0; i < blockGrid.length; i++) {
//         if (x == blockGrid[i][x] && y == blockGrid[i][y] && blockGrid[i].destructible == false);
//         blockGrid[i][x].remove();
//         blockGrid[i][y].remove();
//           // blockGrid.splice(blockGrid.indexOf(blockGrid[i]), 1);
//         }
//
// boom();
//
//       }
