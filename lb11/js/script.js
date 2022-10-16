const vikno = document.querySelector(".windowinfo");
const sendForm = document.querySelector("#informationsend");
const Forma = document.querySelector("form");
const btnTicket = document.querySelector("#concert-map");
btnTicket.addEventListener("click", (event) => { 
  if (event.target.classList.contains("button"))   vikno.style.display = "block";
});
sendForm.addEventListener("click", (event) => {
  if (!confirm("Надіслати дані?")) {
    event.preventDefault();
    alert("Не надіслано");
    Forma.reset();
    vikno.style.display = "none";
  }
});
