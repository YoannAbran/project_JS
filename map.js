const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
const foe = document.querySelector('#foe');
// fs = foe.style, // Un petit raccourci
// fx = 0, // On récupère la position absolue initiale.
// fy = 0;

setInterval(() => {
  var fs = foe.style, // Un petit raccourci
  fx = 10, // On récupère la position absolue initiale.
  fy = 10;

  if (Math.floor(Math.random() * 8)){

   if(fy > 0 && blockGrid[fx][fy - 1].traverser)
      fy--;


else if(fy < V_GRID-1 && blockGrid [fx ][fy + 1].traverser)
      fy++;


  else if(fx > 0 && blockGrid [fx  - 1][fy].traverser)
      fx--;


  else if(fx < H_GRID-1 && blockGrid [fx  + 1][fy].traverser)
      fx++;

  }
  fs.left = String(fx*GRID_SIZE)+'px';
  fs.top = String(fy*GRID_SIZE)+'px';


}, 50); // every 1/2 second

// const foe = document.querySelector('#foe'),
// fs = foe.style, // Un petit raccourci
// fx = 0, // On récupère la position absolue initiale.
// fy = 0;
// setInterval(() => {
//    fs.left= getRandom(0, 800-40)+'px'; // 👈🏼 Horizontally
//    fs.top = getRandom(0, 800-40)+'px'; // 👈🏼 Vertically
// }, 500); // every 1/2 second
