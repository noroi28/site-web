function darkFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
// Sélection du bouton
const HautButton = document.getElementById("Haut");

// Ajouter un écouteur sur le défilement de la fenêtre
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        HautButton.style.display = "block";
    } else {
        HautButton.style.display = "none";
    }
});

// Ajouter un écouteur sur le clic du bouton
HautButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Défilement fluide
    });
});