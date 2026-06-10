const form =
document.getElementById("contactForm");

const successMessage =
document.getElementById("successMessage");

form.addEventListener("submit", e => {

    e.preventDefault();

    const name =
    document.getElementById("name");

    const email =
    document.getElementById("email");

    const subject =
    document.getElementById("subject");

    const message =
    document.getElementById("message");

    const errors =
    document.querySelectorAll(".error");

    errors.forEach(error => {
        error.textContent = "";
    });

    let valid = true;

    // NAME

    if(name.value.trim() === ""){

        name.nextElementSibling.textContent =
        "Name is required";

        valid = false;
    }

    // EMAIL

    const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(
        !email.value.match(emailPattern)
    ){

        email.nextElementSibling.textContent =
        "Enter a valid email address";

        valid = false;
    }

    // SUBJECT

    if(subject.value.trim() === ""){

        subject.nextElementSibling.textContent =
        "Subject is required";

        valid = false;
    }

    // MESSAGE

    if(message.value.trim().length < 10){

        message.nextElementSibling.textContent =
        "Message must be at least 10 characters";

        valid = false;
    }

    if(valid){

        successMessage.textContent =
        "Message validated successfully!";

        form.reset();
    }

});