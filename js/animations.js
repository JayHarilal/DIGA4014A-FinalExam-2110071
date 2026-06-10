const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements =
document.querySelectorAll(
    "section"
);

hiddenElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});