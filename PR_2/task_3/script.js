const text = "Then you're left in the dust, unless I stuck by ya".split("");
const outputElement = document.getElementById("text");
let i = 0;

let interval = setInterval(() => {
    outputElement.textContent = outputElement.textContent + text[i];
    i++;
}, 100);

setTimeout(() => {
    clearInterval(interval);
}, text.length * 100);