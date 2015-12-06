var divs = document.getElementsByTagName("div"); // creer un tableau des balises DIV
//alert(texte.innerHTML);

function change(){
c = divs.length;
for (var i = 0; i < c; i++){
//  alert('Element n° ' + (i + 1) + ' : ' + divs[i].innerHTML);
if (divs[i].innerHTML.length > 200) { // divs[i].textContent
//  console.log(divs[i].innerHTML) pour vérifier les divs qui remplissent la condition
divs[i].innerHTML = divs[i].innerHTML.substr(0,100)+"...";
divs[i].className += "rouge";
}
  }
    }

 var listeli = document.getElementsByTagName("li"); // compter les li dans la page
 alert(listeli.length);

// méthode DOM-2 :
var eventBt = document.getElementById("clickMe"); //evènement sur click du bouton de la fonction change()
eventBt.addEventListener("click", change, false); // (nom de l'évènement, nom de la fonction, sens de propagation des évènements)
