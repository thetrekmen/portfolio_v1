/* Get In Touch Modal */

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

/* Opens the modal and controls CSS variables for transitions and animations */
openModal.addEventListener("click", () => {
  modal.showModal();
});

/* Default way for closing the modal and controls CSS variables for transitions and animations */
closeModal.addEventListener("click", () => {
  modal.close();
});




/* Another way for closing the modal and controls CSS variables for transitions and animations */
/* document.addEventListener("keydown", (e) => {
  if (e.key === "ESCAPE") {
    modal.close();
    // if (modal.close()) {
    //   modal.style.display = "none";
    //   modal.style.top = "0";
    // }
  }
}); */



const sideEmail = document.querySelector(".side-email");
const email = "jonespm1.dev@gmail.com";

sideEmail.addEventListener('click', function(event) {
  
	navigator.clipboard.writeText(email);
});


