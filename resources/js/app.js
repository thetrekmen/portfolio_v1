const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const portfolioProjects1 = document.querySelector(".portfolio-projects-1");
const projectName1 = document.querySelector(".project-name-1");
const portfolioProjects2 = document.querySelector(".portfolio-projects-2");
const projectName2 = document.querySelector(".project-name-2");
const portfolioProjects3 = document.querySelector(".portfolio-projects-3");
const projectName3 = document.querySelector(".project-name-3");
const portfolioProjects4 = document.querySelector(".portfolio-projects-4");
const projectName4 = document.querySelector(".project-name-4");
const portfolioProjects5 = document.querySelector(".portfolio-projects-5");
const projectName5 = document.querySelector(".project-name-5");
const portfolioProjects6 = document.querySelector(".portfolio-projects-6");
const projectName6 = document.querySelector(".project-name-6");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});


portfolioProjects1.addEventListener("mouseover", () => {
  // highlight the mouseover target
  projectName1.style.paddingTop = "1rem";
  projectName1.style.zIndex = "1";
})
portfolioProjects1.addEventListener("mouseleave", () => {
  // highlight the mouseover target
  projectName1.style.paddingTop = "50rem";
  projectName1.style.zIndex = "";
})

portfolioProjects2.addEventListener("mouseover", () => {
  // highlight the mouseover target
  projectName2.style.paddingTop = "1rem";
  projectName2.style.zIndex = "1";
})
portfolioProjects2.addEventListener("mouseleave", () => {
  // highlight the mouseover target
  projectName2.style.paddingTop = "50rem";
  projectName2.style.zIndex = "";
})

portfolioProjects3.addEventListener("mouseover", () => {
  // highlight the mouseover target
  projectName3.style.paddingTop = "1rem";
  projectName3.style.zIndex = "1";
})
portfolioProjects3.addEventListener("mouseleave", () => {
  // highlight the mouseover target
  projectName3.style.paddingTop = "50rem";
  projectName3.style.zIndex = "";
})

portfolioProjects4.addEventListener("mouseover", () => {
  // highlight the mouseover target
  projectName4.style.paddingTop = "1rem";
  projectName4.style.zIndex = "1";
})
portfolioProjects4.addEventListener("mouseleave", () => {
  // highlight the mouseover target
  projectName4.style.paddingTop = "50rem";
  projectName4.style.zIndex = "";
})

portfolioProjects5.addEventListener("mouseover", () => {
  // highlight the mouseover target
  projectName5.style.paddingTop = "1rem";
  projectName5.style.zIndex = "1";
})
portfolioProjects5.addEventListener("mouseleave", () => {
  // highlight the mouseover target
  projectName5.style.paddingTop = "50rem";
  projectName5.style.zIndex = "";
})

portfolioProjects6.addEventListener("mouseover", () => {
  // highlight the mouseover target
  projectName6.style.paddingTop = "1rem";
  projectName6.style.zIndex = "1";
})
portfolioProjects6.addEventListener("mouseleave", () => {
  // highlight the mouseover target
  projectName6.style.paddingTop = "50rem";
  projectName6.style.zIndex = "";
})


