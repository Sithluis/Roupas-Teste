const hamburguerButton = document.querySelector("#hamburguerButton");
const closeButton = document.querySelector("#closeButton");

const mobile = document.querySelector("#mobile");

hamburguerButton.addEventListener("click", function () {
    mobile.classList.add("flex");
})

closeButton.addEventListener("click", function () {
    mobile.classList.remove("flex");
})