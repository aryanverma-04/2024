function getDate() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  var date = year + "/" + month + "/" + day;
  return date;
}

function getTime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  let period = "AM";
  if (hour > 12) {
    hour -= 12;
    period = "PM";
  }
  var time = hour + ":" + minute + ":" + second + " " + period;
  var timeComp = hour + ":" + minute + ":" + period;

  return { time, timeComp };
}

let alarmButton = document.getElementById("alarm-button");
alarmButton.addEventListener("click", () => {
  let popup = document.getElementById("popup-container");
  popup.style.display = "block";
});
let crossButton = document.getElementsByClassName("cross-button")[0];
crossButton.addEventListener("click", () => {
  let popup = document.getElementById("popup-container");
  popup.style.display = "none";
});

let selectMenu = document.querySelectorAll("select");

for (let i = 1; i <= 12; i++) {
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 0; i <= 59; i++) {
  let paddedValue = i < 10 ? `0${i}` : i;
  let option = `<option value="${paddedValue}">${paddedValue}</option>`;
  selectMenu[1].appendChild(new Option(paddedValue));
}

let isAlarmSet = false,
  alarmTime,
  alarmPlayed = false;
let setAlarmButton = document.getElementsByClassName("alarm-submit-button")[0];
setAlarmButton.addEventListener("click", () => {
  let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;
  let dtime = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (time.includes("Hour") || time.includes("Min")) {
    alert("!! Incorrect Time Selected !!");
  }
  alarmTime = time;
  isAlarmSet = true;
  let popup = document.getElementById("popup-container");
  popup.style.display = "none";
  let alarmInfo = document.createElement("div")
  alarmInfo.innerHTML = `<h1>Alarm is Set for the time ${dtime}</h1> `;
  let ele = document.getElementById("show-alarm-info")
  ele.appendChild(alarmInfo)
});

const stopAlarmButton = document.getElementById("stop-alarm-button");

// Function to stop the alarm
const stopAlarm = (audio) => {
  // Pause the audio
  console.log("functionCalled");
  let stopButtonDisplay =
    document.getElementsByClassName("stop-alarm-button")[0];
  stopButtonDisplay.style.display = "flex";
  let a = document.getElementById("stop-alarm-button");
  a.addEventListener("click", () => {
    stopButtonDisplay.style.display = "none";
    audio.pause();
  });
  const popup = document.getElementById("popup-container");
  popup.style.display = "none";
  isAlarmSet = false;
  alarmPlayed = false;
};

// Add event listener to the Stop Alarm button
stopAlarmButton.addEventListener("click", stopAlarm);

// example usage: realtime clock
setInterval(function () {
  let { time, timeComp } = getTime();
  date = getDate();
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
  console.log("timeComp" + timeComp);
  console.log("alarmTime" + alarmTime);
  audio = new Audio("./ringtone.mp3");
  if (isAlarmSet && timeComp === alarmTime && !alarmPlayed) {
    audio.play();
    alarmPlayed = true;
    stopAlarm(audio); // Call stopAlarm only when the alarm plays
  }
}, 1000);
