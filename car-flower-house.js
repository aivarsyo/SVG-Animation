const button = document.querySelector("button")
button.addEventListener("click", init);

function init() {
    document.querySelector("#car").classList.add("carMoves")
}

setTimeout(function () {
    const person = document.querySelector("#person>path")
    person.style.display = "block";
}, 5500);

setTimeout(function () {
    const person = document.querySelector("#person>path")
    person.style.display = "none";
}, 9500);

setTimeout(function () {
    document.querySelector(".homeWindow").style.fill = "yellow"
}, 10500);
