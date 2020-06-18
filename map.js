// const H_GRID = 20;
// const V_GRID = 20;
// const GRID_SIZE = 40;
// const WINDOW_WIDTH = H_GRID * GRID_SIZE;
// const WINDOW_HEIGHT = V_GRID * GRID_SIZE;
//
// var plateau = document.getElementById('plateau');
// plateau.style.width = WINDOW_WIDTH;
// plateau.style.height = WINDOW_HEIGHT;
//
//
//
//
// var blockGrid = [];
// for(var i=0 ; i < H_GRID; i++){
//   blockGrid.push([]);
//   for(var j=0 ; j < V_GRID ; j++){
//     let block=document.createElement('div');
//     block.style.width='40px';
//     block.style.height='40px';
//     block.style.display='flex';
//     block.style.position='absolute';
//
//     if (random100()>70){ block.style.backgroundColor='black';
//     block.traverser = false;
//   }
//     else {
//     block.style.backgroundColor='white';
//     block.traverser = true;
//   }
//     block.style.marginLeft = (i * GRID_SIZE).toString()+'px';
//     block.style.marginTop = (j * GRID_SIZE).toString()+'px';
//
//     document.getElementById("plateau").appendChild(block);
//     blockGrid[i].push(block);
//   }
// }
//
// function randomColor(){
// return "#" + ((1<<24)*Math.random()|0).toString(16);
// }
// function random100() {
// return Math.floor(Math.random() * 100);
// }
// var plateau = document.getElementById("centreplat");
// var uneBrique;
//
// function fabriqueBriques() {
//
// //90 brique pour un espace de 40px entre;
//
//   for (var i = 0; i < 81; i++) {
//     // fabrique une brique
//     uneBrique = document.createElement("div")
//
//     // Ajoute une classe à cette brique pour lui donner un style via CSS
//     uneBrique.className = "classBrique";
//
//     // Insére cette brique dans la div ZoneDeJeu
//     plateau.appendChild(uneBrique);
//   }
//
// }
// //  Lance la fonction
// fabriqueBriques();
