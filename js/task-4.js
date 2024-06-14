const loginForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
    const form = event.target;
    const password = form.elements.password.value;
    const email = form.elements.email.value;

    event.preventDefault();
    if (password === "" || email === "") {
        window.alert("All form fields must be filled in");
    };

    console.log(
        {
            email: email,
            password: password,
        });
    
    form.reset();
};


loginForm.addEventListener("submit", handleSubmit)