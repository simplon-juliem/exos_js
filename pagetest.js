function addHTML(){
document.getElementById('testHTML').innerHTML += document.getElementById('txtHTML').value;
document.getElementById('txtHTML').value = "";
}

function resetHTML(){
  document.getElementById('testHTML').innerHTML= "";
}

function addJS(){
var newScript = document.createElement('script');
newScript.type = "text/javascript";
newScript.text = document.getElementById('txtJS').value;
document.getElementsByTagName('head')[0].appendChild(newScript);
}
