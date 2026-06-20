const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    document.getElementById("successMessage").textContent = ""; 

    let isValid = true;

    // Input values

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Error fields

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    name.classList.remove("input-error");
    email.classList.remove("input-error");
    message.classList.remove("input-error");

    // Name Validation

    if (name.value.trim() === "") {

        nameError.textContent = "Name cannot be empty";

        name.classList.add("input-error");

        isValid = false;
    }

    // Email Validation

    const emailPattern = /.+@.+\..+/;

    if (email.value.trim() === "") {

        emailError.textContent = "Email cannot be empty";

        email.classList.add("input-error");

        isValid = false;

    } else if (!emailPattern.test(email.value)) {

        emailError.textContent = "Enter a valid email";

        email.classList.add("input-error");

        isValid = false;
    }

    // Message Validation

    if (message.value.trim().length < 10) {

        messageError.textContent =
            "Message must be at least 10 characters";

        message.classList.add("input-error");

        isValid = false;
    }

    // Prevent form submission if invalid

    if (!isValid) {

        e.preventDefault();

    } else {

        console.log("Form submitted successfully!");
        const successMessage = document.getElementById("successMessage");

        successMessage.textContent = "Form submitted successfully!";

        successMessage.style.color = "green";
        
        form.reset();
    }

});