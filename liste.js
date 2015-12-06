// Code version 1

/*function tri(genre) {
//console.log("fonction appelée "+ genre);}
var tabFilles = document.querySelectorAll(".fille");// renvoie un tableau contenant le html stocké dans une var
var tabGars = document.querySelectorAll(".gars"); // renvoie un tableau contenant le html stocké dans une var
//console.log(tabFilles)

  if (genre == "gars")
  {
// masquer les filles
        for (var i = 0; i<tabFilles.length; i++)
        { // tant que i est infèrieur à la taille du tableau
            tabFilles[i].style.display = "none"; // masquer les éléments ou attributs 'className'
        }
//afficher les gars
        for (var i = 0; i<tabGars.length; i++)
        { // tant que i est infèrieur à la taille du tableau
            tabGars[i].style.display = "block"; // masquer les éléments ou attributs 'className'
        }
    }

if (genre == "fille")
  {
//masquer les filles
        for (var i = 0; i<tabFilles.length; i++)
        {
          tabFilles[i].style.display = "block";
        }
//afficher les gars
        for (var i = 0; i<tabGars.length; i++)
        {
          tabGars[i].style.display = "none";
        }
  }

if (genre == "tout")
        {
            for (var i = 0; i<tabFilles.length; i++)
            {
                tabFilles[i].style.display = "block";
            }
            for (var i = 0; i<tabGars.length; i++)
            {
                tabGars[i].style.display = "block";
            }
        }

}*/

//Code version 2

function tri(genre,disp,coul) {
  var tabGenre = document.querySelectorAll("."+ genre);
    for (var i = 0; i<tabGenre.length; i++) {
          tabGenre[i].style.display = disp;
          document.getElementById('boite').className = coul;
    }
}
