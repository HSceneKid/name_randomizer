console.log (":)")
const button = document.querySelector("#button")
console.log (button)
const input = document.querySelector("#input")
console.log (input)
const names = ["Raven", "Crow", "Violet"]

const randomName = names[Math.floor(Math.random() * names.length)];


function randomizeName () {
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
}

button.addEventListener("click", function() {
    console.log("Random Name:", randomizeName());
    input.value=randomizeName()
})