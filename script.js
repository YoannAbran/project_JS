
var pion = document.getElementById('pion'),
    s = pion.style, // Un petit raccourci
    x = pion.offsetLeft, // On récupère la position absolue initiale.
    y = pion.offsetTop;
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, x et y.
    switch(keyCode){
    case 38:
        y-=10;
        break;
    case 40:
        y+=10;
        break;
    case 37:
        x-=10;
        break;
    case 39:
        x+=10;
        break;
    }
    // Et enfin on applique les modifications :

		if (x < 0) x = 0;
		if (y < 0) y = 0;
		if (x > 760 ) x=760;
		if (y > 760 ) y=760;

		s.left = String(x)+'px';
		s.top = String(y)+'px';
}

var plateau = document.getElementById("centreplat");
var uneBrique;

function fabriqueBriques() {

//90 brique pour un espace de 40px entre;

  for (var i = 0; i < 81; i++) {
    // fabrique une brique
    uneBrique = document.createElement("div")

    // Ajoute une classe à cette brique pour lui donner un style via CSS
    uneBrique.className = "classBrique";

    // Insére cette brique dans la div ZoneDeJeu
    plateau.appendChild(uneBrique);
  }

}
//  Lance la fonction
fabriqueBriques();
