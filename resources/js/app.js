const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});


const sideEmail = document.querySelector(".side-email");
const email = "jonespm1.dev@gmail.com";

sideEmail.addEventListener('click', function(event) {
  
	navigator.clipboard.writeText(email);
});


