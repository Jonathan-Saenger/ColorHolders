/* Création d'une modale pour expliquer le jeu 

const start = document.getElementById("start");

start.onclick = () => alert("Patience, le jeu arrive bientôt !");*/

// AJAX sur la page d'accueil 
$(document).ready(function() {
    // On charge les données de la section "Actualités"
    $.ajax({
      url: "Index.html",
      method: "GET",
      success: function(data) {
        // On affiche les données dans la section "Actualités"
        $("#Index").html(data);
      }
    });
  });


//Animation prénom
const button = document.getElementById("start");
button.addEventListener("click", () => {
    const name = prompt("Entrez votre prénom");
        if (name !== null && name.trim() !== "") {
            if (/^[A-Za-z]+$/.test(name)) {
                button.textContent = `Bienvenue ${name} et bonne visite à toi !`;
            } else {
                alert("Règle du jeu numéro 1 : ne saisir que des lettres ;-\)");
            }
        } else {
            alert("Règle du jeu numéro 2 : saisir des lettres ;-\)");
        }
});


