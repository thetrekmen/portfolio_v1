/* Get In Touch Modal */
  const modal = document.querySelector(".modal");
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


/* Copy Email */
  const sideEmail = document.querySelector(".side-email");
  const email = "jonespm1.dev@gmail.com";

  sideEmail.addEventListener('click', function(event) {
    
    navigator.clipboard.writeText(email);
  });


/* Project Modals */

/* Modal 1 */
const projectModal1 = document.querySelector("#modal1");
const openProject1 = document.querySelector("#open-project1");

  openProject1.addEventListener("click", () => {
    projectModal1.showModal();
  });

/* Modal 2 */
const projectModal2 = document.querySelector("#modal2");
const openProject2 = document.querySelector("#open-project2");

  openProject2.addEventListener("click", () => {
    projectModal2.showModal();
  });

/* Modal 3 */
const projectModal3 = document.querySelector("#modal3");
const openProject3 = document.querySelector("#open-project3");

  openProject3.addEventListener("click", () => {
    projectModal3.showModal();
  });

/* Modal 4 */
const projectModal4 = document.querySelector("#modal4");
const openProject4 = document.querySelector("#open-project4");

  openProject4.addEventListener("click", () => {
    projectModal4.showModal();
  });




