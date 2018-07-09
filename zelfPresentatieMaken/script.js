function bewerkTitel() {
  var titelbewerken = prompt("TITEL AANPASSEN", localStorage.getItem("titel"));
  if (titelbewerken === "") {
    alert("U kunt de titel niet verwijderen");
  } else {
    document.getElementById("titel").innerHTML = titelbewerken;
    localStorage.setItem("titel", titelbewerken);
}
}


function bewerkText() {
  var textbewerken = prompt("AANPASSEN", localStorage.getItem("text"))
  if (textbewerken === "") {
    localStorage.setItem("text1", textbewerken)
    document.getElementById("boven").innerHTML = "Deze tekst is verwijderd. <br> Klik om weer toe te voegen.";
  } else {
    document.getElementById("boven").innerHTML = textbewerken;
    localStorage.setItem("text1", textbewerken)
  }
}
function bewerkText1() {

  var text1bewerken = prompt("AANPASSEN", localStorage.getItem("text1"));
  if (text1bewerken === "") {
    localStorage.setItem("text1", text1bewerken);
    document.getElementById("tekst1").innerHTML = "Deze tekst is verwijderd. <br> Klik om weer toe te voegen.";

  } else {
    document.getElementById("tekst1").innerHTML = text1bewerken;
    localStorage.setItem("text1", text1bewerken);
}
}

// Retrieve
document.getElementById("titel").innerHTML = localStorage.getItem("titel");
document.getElementById("boven").innerHTML = localStorage.getItem("text");
document.getElementById("tekst1").innerHTML = localStorage.getItem("text1");


if (localStorage.getItem("text") === "") {
  document.getElementById("boven").innerHTML = "Deze tekst is verwijderd. <br> Klik om weer toe te voegen."
} else{
  document.getElementById("boven").innerHTML = localStorage.getItem("text");
}

if (localStorage.getItem("text1") === "") {
  document.getElementById("tekst1").innerHTML = "Deze tekst is verwijderd. <br> Klik om weer toe te voegen."
} else {
  document.getElementById("tekst1").innerHTML = localStorage.getItem("text1");
}

document.getElementById("achtergrond1").style.backgroundColor = localStorage.getItem("kleur");
document.getElementById("achtergrond1").style.color = localStorage.getItem("tekstkleur");

if (!localStorage.getItem("afbeelding_url") === null) {
  document.getElementById("afbe").src = "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.freepik.com%2Ficonen-gratis%2Fafbeelding-invoegen-icoon_318-33972.jpg%3Fsize%3D338%26ext%3Djpg&f=1";
} else {
  document.getElementById("afbe").src = localStorage.getItem("afbeelding_url");
  document.getElementById("afbe").style.width = localStorage.getItem("width");
}

if (!localStorage.getItem("kleur") === null) {
  document.getElementById("achtergrondkleur").select = localStorage.getItem("kleur");
} else {
  document.getElementById("achtergrondkleur").select = "white";
}
document.getElementById("achtergrondkleur").value = localStorage.getItem("kleur")
document.getElementById("tekstkleur").value = localStorage.getItem("tekstkleur")
function veranderAchtergrond(){
  var selectElement = document.getElementById('achtergrondkleur')
  var achtergrond = selectElement.options[selectElement.selectedIndex].value;
  localStorage.setItem("kleur", achtergrond);
  document.getElementById("achtergrond1").style.backgroundColor = achtergrond;
}
function verandertekst(){
  var selectElement1 = document.getElementById('tekstkleur')
  var tekstkleur1 = selectElement1.options[selectElement1.selectedIndex].value;
  localStorage.setItem("tekstkleur", tekstkleur1);
  document.getElementById("achtergrond1").style.color = tekstkleur1;
}
function afb() {
  var url = prompt("Url van Afbeelding");
  if (url === "") {
    localStorage.setItem("afbeelding_url", "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.freepik.com%2Ficonen-gratis%2Fafbeelding-invoegen-icoon_318-33972.jpg%3Fsize%3D338%26ext%3Djpg&f=1")
    document.getElementById("afbe").src = "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.freepik.com%2Ficonen-gratis%2Fafbeelding-invoegen-icoon_318-33972.jpg%3Fsize%3D338%26ext%3Djpg&f=1";
  } else {
    document.getElementById("afbe").src = url;
    localStorage.setItem("afbeelding_url", url);
  }
}
function setwidth() {
  var width = prompt("grootte");
  if (width<101) {
    document.getElementById("afbe").style.width = width + "%";
    localStorage.setItem("width", width);
  } else {
    alert("Het kan niet meer dan 100 zijn.")
  }
}
