const georgia = document.getElementById("watch0");
//const japan = document.getElementById("watch1");
//const russia = document.getElementById("watch2");
//const ireland = document.getElementById("watch3");

function showTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let formatedTime = formatTime(hours);
  hours = checkTime(hours);
  //console.log(date, hours, minutes, seconds);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  georgia.innerHTML = `${hours}:${minutes}:${seconds}:${formatedTime} `;
}

function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time;
}

function formatTime(time) {
  let format = "AM";
  if (time >= 12) {
    format = "PM";
  }
  return format;
}

function addZero(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

showTime();
setInterval(showTime, 999);
