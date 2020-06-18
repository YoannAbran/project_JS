const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;




var blockGrid = [];
for(var i=0 ; i < H_GRID; i++){
  blockGrid.push([]);
  for(var j=0 ; j < V_GRID ; j++){
    let block=document.createElement('div');
    block.style.width='40px';
    block.style.height='40px';
    block.style.display='flex';
    block.style.position='absolute';
    block.style.backgroundColor='black';
    block.style.marginLeft = (i * GRID_SIZE).toString()+'px';
    block.style.marginTop = (j * GRID_SIZE).toString()+'px';

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);
  }
}

blockGrid[10][10].style.backgroundColor = 'red';
