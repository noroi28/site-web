function darkFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
function cRetour() {
  window.onscroll = function(ev) {
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  };
}