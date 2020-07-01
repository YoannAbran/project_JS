var animationIntervalBomb;
var spriteBomb = bomb;
var widthOfSpriteBomb = 40;
var widthOfEachBomb = 40;
var heightOfSpriteBomb = 237;
var heightOfEachBomb = 40;

function stopAnimationBomb() {
  clearInterval(animationIntervalBomb);
}

function startAnimationBomb() {
  stopAnimationBomb();
  var position = heightOfEachBomb; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = heightOfEachBomb; //difference between two sprites

  animationIntervalBomb = setInterval(() => {
    spriteBomb.style.backgroundPosition = `0px -${position}px `;

    if (position < heightOfSpriteBomb) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = heightOfEachBomb;
    }
    //reset the position to show first sprite after the last one
  }, speed);



  // setTimeout(stopAnimation, 400);

}
