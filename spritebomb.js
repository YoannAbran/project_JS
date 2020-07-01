var animationIntervalBomb;
var spriteBomb = bomb;
var widthOfSpriteBomb = 120;
var widthOfEachBomb = 40;
var heightOfSpriteBomb = 40;
var heightOfEachBomb = 40;

function stopAnimationBomb() {
  clearInterval(animationIntervalBomb);
}

function startAnimationBomb() {
  stopAnimationBomb();
  var position = widthOfEachBomb; //start position for the image
  const speed = 333; //in millisecond(ms)
  const diff = widthOfEachBomb; //difference between two sprites

  animationIntervalBomb = setInterval(() => {
    spriteBomb.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteBomb) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachBomb;
    }
    //reset the position to show first sprite after the last one
  }, speed);



  // setTimeout(stopAnimation, 400);

}
