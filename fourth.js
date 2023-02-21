let conteiner = document.getElementById("image-con");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let count = 0;

next.addEventListener("click", () => {
  if (count === 5) {
    count = -1;
  }
  count++;
  conteiner.style.backgroundImage = `url("./image/bcg-${count}.jpg")`;
});
prev.addEventListener("click", () => {
  if (count === 0) {
    count = 5;
  }
  count--;
  conteiner.style.backgroundImage = `url("./image/bcg-${count}.jpg")`;
});
