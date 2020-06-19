const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
//
const foe = document.querySelector('#foe'),
fs = foe.style, // Un petit raccourci
fx = 0, // On récupère la position absolue initiale.
fy = 0;

setInterval(() => {
   fs.left= getRandom(0, 800-40)+'px'; // 👈🏼 Horizontally
   fs.top = getRandom(0, 800-40)+'px'; // 👈🏼 Vertically

}, 500); // every 1/2 second

switch(){
case 0:
if(fy > 0 && blockGrid[fx][fy - 1].traverser)
    fy--;
    break;
case 1:
if(fy < V_GRID-1 && blockGrid [fx ][fy + 1].traverser)
    fy++;
    break;
case 2:
if(fx > 0 && blockGrid [fx  - 1][fy].traverser)
    fx--;
    break;
case 3:
if(fx < H_GRID-1 && blockGrid [fx  + 1][fy].traverser)
    fx++;
    break;
}
fs.left = String(x*GRID_SIZE)+'px';
fs.top = String(y*GRID_SIZE)+'px';
