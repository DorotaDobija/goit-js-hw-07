const textInput = document.querySelector("#name-input");
const text = document.querySelector("#name-output")


const textAdded = () => {

    if (textInput.value !== "" && textInput.value !== " ") {
        text.innerHTML = textInput.value;
    } else text.innerHTML = "Anonymous";

    }

textInput.addEventListener("input", textAdded)