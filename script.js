let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    let result = document.getElementById("result");

    if(name == "" || email == "" || message == ""){

        result.innerHTML = "Please fill all fields";
        result.style.color = "red";

    }

    else{

        result.innerHTML = "Form Submitted Successfully";
        result.style.color = "green";

        form.reset();

    }

});