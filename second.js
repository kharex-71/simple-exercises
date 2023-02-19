const input = document.getElementById("inp");
const button = document.getElementById("btn");
const showMsg = document.getElementById("text");

console.log(input);
console.log(button);
console.log(showMsg);

button.addEventListener("click", message);

function message() {
  let showText = input.value;

  if (showText === "") {
    window.alert("cannot show empty message");
    return;
  }

  showMsg.innerHTML = showText;
}
