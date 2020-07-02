var animationIntervalFoe;
var widthOfSpriteFoe = 120;
var widthOfEachFoe = 40;
var heightOfSpriteFoe = 160;
var heightOfEachSprite = 40;

function stopAnimationFoe() {
  clearInterval(animationIntervalFoe);
}

for (var i = 0; i < foes.length; i++) {
  var spriteFoe = foes[i];
}


function startAnimationFoebas() {
  stopAnimationFoe();
  var position = widthOfEachFoe; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachFoe; //difference between two sprites

  animationIntervalFoe = setInterval(() => {



    spriteFoe.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteFoe) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachFoe;
    }
    //reset the position to show first sprite after the last one

  }, speed);

}


function startAnimationFoehaut() {
  stopAnimationFoe();
  var position = widthOfEachFoe; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachFoe; //difference between two sprites

  animationIntervalFoe = setInterval(() => {



    spriteFoe.style.backgroundPosition = `-${position}px 40px`;

    if (position < widthOfSpriteFoe) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachFoe;
    }
    //reset the position to show first sprite after the last one

  }, speed);
}


function startAnimationFoegauche() {
  stopAnimationFoe();
  var position = widthOfEachFoe; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachFoe; //difference between two sprites

  animationIntervalFoe = setInterval(() => {



    spriteFoe.style.backgroundPosition = `-${position}px 80px`;

    if (position < widthOfSpriteFoe) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachFoe;
    }
    //reset the position to show first sprite after the last one

  }, speed);
}

function startAnimationFoedroite() {
  stopAnimationFoe();
  var position = widthOfEachFoe; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachFoe; //difference between two sprites

  animationIntervalFoe = setInterval(() => {



    spriteFoe.style.backgroundPosition = `-${position}px 120px`;

    if (position < widthOfSpriteFoe) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachFoe;
    }
    //reset the position to show first sprite after the last one

  }, speed);
}
