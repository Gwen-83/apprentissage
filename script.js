// Petite animation JS optionnelle (future évolution possible)
// Exemple : fade-in on scroll, bouton retour en haut, etc.
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page d'accueil chargée !");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page d'accueil chargée !");
  
  // Code pour le bouton retour en haut
  const backToTopButton = document.getElementById("back-to-top");
  
  // Afficher le bouton quand l'utilisateur scrolle vers le bas
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { // Apparaît après avoir scrollé de 300px
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });
  
  // Retour en haut quand le bouton est cliqué
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Animation de défilement fluide
    });
  });
});

const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
