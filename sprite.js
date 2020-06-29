var animationInterval;
var spriteSheet = document.getElementById("pion");
var widthOfSpriteSheet = 160;
var widthOfEachSprite = 40;
var heightOfSpriteSheet = 160;
var heightOfEachSprite = 40;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimationbas() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
<<<<<<< HEAD

=======
  setTimeout(stopAnimation, 400);
>>>>>>> 46c7c30d7b3dc8bef1a14a9b59909f538691c293
}


function startAnimationhaut() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 40px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
<<<<<<< HEAD

=======
  setTimeout(stopAnimation, 400);
>>>>>>> 46c7c30d7b3dc8bef1a14a9b59909f538691c293
}


function startAnimationgauche() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 80px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
<<<<<<< HEAD

=======
  setTimeout(stopAnimation, 400);
>>>>>>> 46c7c30d7b3dc8bef1a14a9b59909f538691c293
}

function startAnimationdroite() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 120px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
<<<<<<< HEAD

=======
  setTimeout(stopAnimation, 400);
>>>>>>> 46c7c30d7b3dc8bef1a14a9b59909f538691c293
}


//Start animation
// startAnimation();
