const clock = document.getElementById("watch0");
const jpn = document.getElementById("watch1");
const russ = document.getElementById("watch2");
const irld = document.getElementById("watch3");

console.log(clock, jpn, russ, irld);

function georgia() {
  let change = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Tbilisi",
    timeStyle: "medium",
    hourCycle: "h11",
  });
  clock.innerHTML = change;
  setInterval(georgia, 1000);
}
georgia();




function Japan() {
  let display = new Date().toLocaleTimeString("en-US", {
    timeZone: "	Asia/Tokyo",
    timeStyle: "medium",
    hourCycle: "h11",
  });
  jpn.innerHTML = display;
  setInterval(Japan, 1000);
}
Japan();
