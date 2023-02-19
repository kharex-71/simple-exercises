let input = document.getElementById("num");
let plius = document.getElementById("plius");
let minus = document.getElementById("minus");

let count = 0;
plius.addEventListener("click", morePlius);
minus.addEventListener("click", lessMinus);

function morePlius() {
  count++;
  input.innerHTML = count;
  if (input.innerHTML === "0") {
    input.style.color = "white";
  } else if (input.innerHTML > "0") {
    input.style.color = "green";
  }
}
function lessMinus() {
  count--;
  input.innerHTML = count;
  if (input.innerHTML === "0") {
    input.style.color = "white";
  } else if (input.innerHTML < "0") {
    input.style.color = "red";
  }
}
