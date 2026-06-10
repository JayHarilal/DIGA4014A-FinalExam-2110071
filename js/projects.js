// Filtering

const modalImage =
document.getElementById("modalImage");

const imageLightbox =
document.getElementById("imageLightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.querySelector(".close-lightbox");

const filterButtons =
document.querySelectorAll(".filter-btn");

const projects =
document.querySelectorAll(".project-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector(".active-filter")
            .classList.remove("active-filter");

        button.classList.add("active-filter");

        const filter =
        button.dataset.filter;

        projects.forEach(project => {

            if(
                filter === "all" ||
                project.dataset.category === filter
            ){
                project.style.display = "block";
            }
            else{
                project.style.display = "none";
            }

        });

    });

});


// MODAL

const modal =
document.getElementById("projectModal");

const modalTitle =
document.getElementById("modalTitle");

const modalDescription =
document.getElementById("modalDescription");

const modalButtons =
document.querySelectorAll(".modal-btn");

const closeModal =
document.querySelector(".close-modal");

const projectData = {

    whitepace:{
        title:"Whitepace SaaS Landing Page",
        image:"images/whitespace.png",
        description:"Responsive SaaS website recreated from a detailed Figma design with focus on pixel-perfect implementation."
    },

    moniepoint:{
        title:"Moniepoint Banking Interface",
        image:"images/moniepoint.png",
        description:"Modern banking platform interface with responsive design and user-focused layouts."
    },

    unity:{
        title:"Unity FPS Project",
        image:"images/unity.png",
        description:"3D first-person game featuring gameplay systems and interactive environments."
    },

    product:{
        title:"Responsive Product Layout",
        image:"images/responsive.png",
        description:"Pricing card layout demonstrating responsive CSS design patterns."
    },

    portfolio:{
        title:"Portfolio Website",
        image:"images/portfolio.png",
        description:"Professional developer portfolio showcasing skills, projects, and education."
    },

    dashboard:{
        title:"Interactive Dashboard",
        image:"images/dashboard.png",
        description:"Dashboard interface focusing on usability, data hierarchy, and accessibility."
    }

};

modalButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project =
        projectData[
            button.dataset.project
        ];

        modalTitle.textContent =
        project.title;

        modalImage.src =
        project.image;

        modalImage.alt =
        project.title;

        modalDescription.textContent =
        project.description;

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {

    if(e.target === modal){
        modal.style.display = "none";
    }
modalImage.addEventListener("click", () => {

    lightboxImage.src =
    modalImage.src;

    imageLightbox.style.display =
    "flex";

});
closeLightbox.addEventListener("click", () => {

    imageLightbox.style.display =
    "none";

});
imageLightbox.addEventListener("click", e => {

    if(e.target === imageLightbox){

        imageLightbox.style.display =
        "none";

    }

});
});