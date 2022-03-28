const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");
const form = document.querySelector(".container");

checkBtn.addEventListener("click", palidrome);
form.addEventListener("submit", palidrome);

function palidrome(e) {
  e.preventDefault();
  let inputValue = document.querySelector(".input").value;

  let length = inputValue.length;

  let first = inputValue.substring(0, Math.floor(length / 2)).toLowerCase();
  let last = inputValue
    .substring(length - Math.floor(length / 2))
    .toLowerCase();

  let flip = last.split("").reverse().join("");
  if (first == flip) {
    result.innerHTML = `${inputValue.toUpperCase()} is a Polidrome Word.`;
  } else {
    result.innerHTML = `${inputValue.toUpperCase()} is Not a Polidrome Words.`;
  }
  form.reset();
}
