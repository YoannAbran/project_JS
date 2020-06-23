const VENTILATION = document.querySelectorAll('.ventilation');

let ventil = [];

ventil.push("url('water1.png')");
ventil.push("url('water2.png')");
ventil.push("url('water3.png')");
ventil.push("url('water1.png')");

let venti = 0;

function changerImageVenti(){

    if (venti < ventil.length) {
      VENTILATION.forEach(element => {
        element.style.backgroundImage = ventil[venti]});
      venti++;
    }
    else {
      venti = 0;
    }
  window.setTimeout("changerImageVenti()", 75)
}

// Charge la fonction
window.onload = function(){
changerImageVenti();
}
