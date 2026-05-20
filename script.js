const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const error = document.getElementById("error");

    if(name === "" || email === "" || message === ""){

        error.innerHTML = "Please fill all fields 💔";

    }

    else if(message.length < 10){

        error.innerHTML = "Message must be at least 10 characters ✨";

    }

    else{

        error.style.color = "green";
        error.innerHTML = "Message Sent Successfully 💖";

        form.reset();

    }

});