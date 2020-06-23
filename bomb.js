let bomb = document.createElement('div');
bomb.style.width = GRID_SIZE + "px";
bomb.style.height = GRID_SIZE + "px";
bomb.style.backgroundColor = 'black';
bomb.style.position = 'absolute';
bomb.id="bomb";

function creatBomb(){

  if (!document.getElementById("bomb")) {
      bomb.style.left = String(x* GRID_SIZE) + 'px';
      bomb.style.top = String(y* GRID_SIZE) + 'px';

      document.getElementById("plateau").appendChild(bomb);

      setTimeout(disparitionBomb, 1000);
      }
  }


  function disparitionBomb(){
    if (document.getElementById("bomb")) {
      document.getElementById("bomb").remove();
    }
  }
