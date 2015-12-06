var tabAgents = {
"001" : ["Edouard","Commentaire"],
"004" : ["Frederick","Commentaire2"],
"005" : ["Stuart","Commentaire3"],
"006" : ["Giddings","Commentaire4"],
"007" : ["Bond","Commentaire5"],
"008" : ["Bill","Commentaire6"],
"009" : ["Cederic","Commentaire7"],
"0010" : ["","Commentaire8"],
"0011" : ["","Commentaire9"],
"0012" : ["Sam","Commentaire10"]
};

function nomAgent(codeAgent) // 3) la fonction s'initialise
{
     //tableauBond[code]; affiche le nom de l'agent par rapport au "007"
     // aloert(code);
   //}
//CodeAgent("007");
	if (tabAgents[codeAgent][0] == "") // vérifie le contenu de cette case là
  {
      tabAgents[codeAgent][0] = prompt("Cet agent n'existe pas. Saisir son nom");
      tabAgents[codeAgent][1] = prompt("Saisir son commentaire");
      // on lui demande de faire un prompt et on stocke l'info dans le tabAgents[CodeAgent]
  }

	alert(tabAgents[codeAgent]);
}

var numAgent = prompt("Saisir le code"); // 1) le programme exécute le prompt
nomAgent(numAgent); // 2) on appelle la fonction et stocke le numéro tapé
console.log(tabAgents);
