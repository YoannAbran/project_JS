// test with array
// const SOL = document.querySelectorAll('.sol');
//
// let solFoe = [];
//
// // console.log(SOL);
//
// for (var i = 0; i < 5; i++) {
// solFoe.push([]);
// for (var j = 0; j <5; j++){
//   let foe = document.createElement('div');
// foe.id= "foe"+ String(i);
//   fs = foe.style;
//   fs.width = GRID_SIZE +'px';
//   fs.height = GRID_SIZE +'px';
//   fs.position = 'absolute';
//   fs.zIndex ='1';
//   direction = "right";
//
//
//        fs.backgroundColor='aqua';
//       foe.traverser = false;
//
// fs.marginTop = (j * GRID_SIZE).toString() + 'px';
// fs.marginLeft = (i * GRID_SIZE).toString() + 'px';
//   fX = foe.offsetLeft;
//   fY = foe.offsetTop;
//   document.getElementById("plateau").appendChild(foe);
//   solFoe.push(foe);
//
//   console.log(foe);
//   console.log(solFoe);
// }
//   }

// for (var i = 0; i <5; i++) {
//
// let foe = document.createElement('div');
// // foe.id= "foe"+ String(i);
// fs = foe.style;
// fs.width = GRID_SIZE +'px';
// fs.height = GRID_SIZE +'px';
// fs.position = 'absolute';
// fs.zIndex ='1';
// fs.backgroundColor='aqua'
// fX = foe.offsetLeft;
// fY = foe.offsetTop;
// direction = "right";
// document.getElementById("plateau").appendChild(foe);
//
// console.log(foe);
// }


  // var frame = 0; //method window.requestAnimationFrame
  //
  // function loop() {
  //
  //
  //   if (frame === 15) {


  setInterval(() => {   //method setInterval
      switch (direction) {
        // left
        case "left":
          if (fY > 0 && blockGrid[fX][fY - 1].traverser)
            fY--; // ou y-=40;
          break;
          // right
        case "right":
          if (fX < H_GRID - 1 && blockGrid[fX + 1][fY].traverser)
            fX++;
          break;
          // up
        case "up":
          if (fY < V_GRID - 1 && blockGrid[fX][fY + 1].traverser)
            fY++;
          break;
          // down
        case "down":
          if (fX > 0 && blockGrid[fX - 1][fY].traverser)
            fX--;
          break;
      }

      fs.marginLeft = String(fX * GRID_SIZE ) + 'px';
      fs.marginTop = String(fY * GRID_SIZE ) + 'px';

      let random = random100();
      if (random < 25) {
        direction = "left";
      }
      if (random >= 25 && random < 50) {
        direction = "right";
      }
      if (random >= 50 && random < 75) {
        direction = "up";
      }
      if (random > 75) {
        direction = "down";
        console.log(setInterval);
      }
    }, 100);


    //   frame = 0;
    // }
    // frame++;
//     window.requestAnimationFrame(loop);
//     console.log(loop);
//
//   }
//
//   // 60 x / seconde
//
// window.requestAnimationFrame(loop);
