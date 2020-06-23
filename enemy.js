var foe = document.createElement('div');
fs = foe.style;
fs.width = '40px';
fs.height = '40px';
fs.position = 'absolute';
fs.backgroundColor='aqua';
fs.zIndex ='1';
fX = foe.offsetLeft;
fY = foe.offsetTop;
direction = "right";




var frame = 0;
function loop() {
  if (frame === 15) {
    switch (direction) {
      // Up
      case "left":
        if (fY > 0 && blockGrid[fX][fY - 1].traverser)
          fY--; // ou y-=40;
        break;
        // Right
      case "right":
        if (fX < H_GRID - 1 && blockGrid[fX + 1][fY].traverser)
          fX++;
        break;
        // Down
      case "up":
        if (fY < H_GRID - 1 && blockGrid[fX][fY + 1].traverser)
          fY++;
        break;
        // Left
      case "down":
        if (fX > 0 && blockGrid[fX - 1][fY].traverser)
          fX--;
        break;
    }
    fs.left = String(fX * GRID_SIZE) + 'px';
    fs.top = String(fY * GRID_SIZE) + 'px';
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
    }
    frame = 0;
  }
  frame++;
  window.requestAnimationFrame(loop);
}
// 60 x / seconde
window.requestAnimationFrame(loop);
