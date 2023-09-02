const currentTime = document.querySelector("h1");
const selectMenus = document.querySelectorAll("select");
const content = document.querySelector(".content");
const buttonbtn = document.querySelector(".btn");
let alarmTime,
  ringtone = new Audio("./Har Har Shambhu Shiv Mahadeva(PagalWorld).mp3"),
  isAlarmSet;
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value = "${i}" > ${i} </option>`;
  selectMenus[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value = "${i}" > ${i} </option>`;
  selectMenus[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "Am" : "Pm";
  let option = `<option value = "${ampm}" > ${ampm} </option>`;
  selectMenus[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  ampm = "AM";
  if (h > 12) {
    h = h - 12;
    h = "0" + h;
    ampm = "Pm";
  }
  h = h == 0 ? (h = 12) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;
  currentTime.innerText = `${h}:${m}:${s}:${ampm}`;
  if (alarmTime === `${h}:${m}:${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
  console.log(`${h}:${m}:${ampm}`);
});

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.paused();
    content.classList.remove("disable");
    buttonbtn.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }

  let time = `${selectMenus[0].value}:${selectMenus[1].value}:${selectMenus[2].value}`;
  if (
    time.includes("Hour") ||
    time.includes("Minutes") ||
    time.includes("Am/Pm")
  ) {
    return alert("Please, select a valid time to set time ");
  }
  // console.log(time);
  alarmTime = time;
  isAlarmSet = true;
  content.classList.add("disable");
  buttonbtn.innerText = "Clear Alarm";
}

buttonbtn.addEventListener("click", setAlarm);
