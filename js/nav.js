//Dynamic nav using js

const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<nav>
    <div class="nav-container">

        <a href="index.html" class="logo">

            <div class="logo-box">
                JH
            </div>

            <div class="logo-text">
                Jayaveer Harilal
            </div>
        </a>

        <div class="hamburger" id="hamburger">

            <div class="menu-logo-box">
                JH
                <span class="menu-arrow">
                        ▼
                </span>
            </div>

        </div>

        <div class="nav-links" id="navLinks">

            <a href="index.html" id="home-link">
                Home
            </a>

            <a href="about.html" id="about-link">
                About
            </a>

            <a href="projects.html" id="projects-link">
                Projects
            </a>

            <a href="contact.html" id="contact-link">
                Contact
            </a>

        </div>

    </div>
</nav>
`;


//Active page highlight

const currentPage =
window.location.pathname.split("/").pop();

if (
    currentPage === "" ||
    currentPage === "index.html"
) {
    document
        .getElementById("home-link")
        .classList.add("active");
}

if (currentPage === "about.html") {
    document
        .getElementById("about-link")
        .classList.add("active");
}

if (currentPage === "projects.html") {
    document
        .getElementById("projects-link")
        .classList.add("active");
}

if (currentPage === "contact.html") {
    document
        .getElementById("contact-link")
        .classList.add("active");
}

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("show-menu");

});

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

    });

});