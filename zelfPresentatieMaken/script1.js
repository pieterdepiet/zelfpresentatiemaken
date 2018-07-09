document.getElementById("titelwatch").innerHTML = localStorage.getItem("titel");
document.getElementById("tekstwatch").innerHTML = localStorage.getItem("text");
document.getElementById("tekst1watch").innerHTML = localStorage.getItem("text1");
document.getElementById("achtergrond2").style.backgroundColor = localStorage.getItem("kleur");
document.getElementById("achtergrond2").style.color = localStorage.getItem("tekstkleur");
if (localStorage.getItem("afbeelding_url")==="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.freepik.com%2Ficonen-gratis%2Fafbeelding-invoegen-icoon_318-33972.jpg%3Fsize%3D338%26ext%3Djpg&f=1"){
  document.getElementById("afbee").src = "";
} else {
  document.getElementById("afbee").src = localStorage.getItem("afbeelding_url");
}
