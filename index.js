// Création de la modale
const cardModal = document.createElement("div");
cardModal.classList.add("modal");
const cardModalContent = document.createElement("div");
cardModalContent.classList.add("modal-content");
const spanModal = document.createElement("span");
spanModal.classList.add("close");
spanModal.innerHTML = "&times;";
const textModal = document.createElement("p");
textModal.textContent = "texte texte texte";

cardModalContent.appendChild(spanModal);
cardModalContent.appendChild(textModal);
cardModal.appendChild(cardModalContent);

// Sélection du body
const body = document.getElementsByTagName("body")[0];
body.appendChild(cardModal);

// Sélection des éléments
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = spanModal;

// Ouvrir la modale
openModalBtn.addEventListener("click", function (event) {
  console.log("click open");
  cardModal.style.display = "block";
  event.stopPropagation();
});

// Fermer la modale quand on clique sur la croix
closeModalBtn.addEventListener("click", function () {
  console.log("click close");
  cardModal.style.display = "none";
});

// Fermer la modale quand on clique en dehors de celle-ci
window.addEventListener("click", function (event) {
  console.log("click close window");
  if (event.target == cardModal) {
    cardModal.style.display = "none";
  }
});
