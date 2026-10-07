
const knapp = document.querySelector(".knapp");
const text = document.querySelector(".kontakt");

knapp.addEventListener("click" , visamer);

function visamer(){
text.classList.toggle("visa");
}