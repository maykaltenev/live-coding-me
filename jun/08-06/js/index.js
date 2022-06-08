// password gen upon a user input
const box = document.querySelector(".box");

const whiteBg = () => {
  box.style.backgroundColor = "white";
};
const orangeBg = () => {
  box.style.backgroundColor = "orange";
};
box.addEventListener("mouseenter", orangeBg);
box.addEventListener("mouseleave", whiteBg);
