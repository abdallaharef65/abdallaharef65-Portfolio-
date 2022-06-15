let html = document.querySelector("html");
let changeColor = document.querySelector("#changecolor");
changeColor.addEventListener("click", function () {
  html.classList.toggle("active");
});
