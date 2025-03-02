let btnDiscover = document.getElementById("btnDiscover");
let randomTheme = document.getElementById("randomTheme");

let clearActivity = document.getElementById("clearActivity");
let activityContainer = document.getElementById("activityContainer");

let btnCompleted1 = document.getElementById("btnCompleted1");
let btnCompleted2 = document.getElementById("btnCompleted2");
let btnCompleted3 = document.getElementById("btnCompleted3");
let btnCompleted4 = document.getElementById("btnCompleted4");
let btnCompleted5 = document.getElementById("btnCompleted5");
let btnCompleted6 = document.getElementById("btnCompleted6");

setDates();

btnCompleted1.addEventListener("click", function (e) {
  let taskTitle1 = getInnerText("taskTitle1");
  let totalTask = parseInt(getInnerText("totalTask"));
  let ongoingTask = parseInt(getInnerText("ongoingTask"));

  setInnerText("totalTask", totalTask + 1);
  setInnerText("ongoingTask", ongoingTask - 1);
  btnCompleted1.disabled = true;

  let div = document.createElement("div");
  div.innerHTML = `
     <p class="p-3 bg-ligthBg rounded-lg">You have Complete The Task ${taskTitle1} at ${getTimeNow()}</p>
    `;
  activityContainer.appendChild(div);

  alert("Board updated Successfully");
});
btnCompleted2.addEventListener("click", function (e) {
  let taskTitle2 = getInnerText("taskTitle2");
  let totalTask = parseInt(getInnerText("totalTask"));
  let ongoingTask = parseInt(getInnerText("ongoingTask"));

  setInnerText("totalTask", totalTask + 1);
  setInnerText("ongoingTask", ongoingTask - 1);
  btnCompleted2.disabled = true;

  let div = document.createElement("div");
  div.innerHTML = `
     <p class="p-3 bg-ligthBg rounded-lg">You have Complete The Task ${taskTitle2} at ${getTimeNow()}</p>
    `;
  activityContainer.appendChild(div);

  alert("Board updated Successfully");
});
btnCompleted3.addEventListener("click", function (e) {
  let taskTitle3 = getInnerText("taskTitle3");
  let totalTask = parseInt(getInnerText("totalTask"));
  let ongoingTask = parseInt(getInnerText("ongoingTask"));

  setInnerText("totalTask", totalTask + 1);
  setInnerText("ongoingTask", ongoingTask - 1);
  btnCompleted3.disabled = true;

  let div = document.createElement("div");
  div.innerHTML = `
     <p class="p-3 bg-ligthBg rounded-lg">You have Complete The Task ${taskTitle3} at ${getTimeNow()}</p>
    `;
  activityContainer.appendChild(div);

  alert("Board updated Successfully");
});
btnCompleted4.addEventListener("click", function (e) {
  let taskTitle4 = getInnerText("taskTitle4");
  let totalTask = parseInt(getInnerText("totalTask"));
  let ongoingTask = parseInt(getInnerText("ongoingTask"));

  setInnerText("totalTask", totalTask + 1);
  setInnerText("ongoingTask", ongoingTask - 1);
  btnCompleted4.disabled = true;

  let div = document.createElement("div");
  div.innerHTML = `
     <p class="p-3 bg-ligthBg rounded-lg">You have Complete The Task ${taskTitle4} at ${getTimeNow()}</p>
    `;
  activityContainer.appendChild(div);

  alert("Board updated Successfully");
});
btnCompleted5.addEventListener("click", function (e) {
  let taskTitle5 = getInnerText("taskTitle5");
  let totalTask = parseInt(getInnerText("totalTask"));
  let ongoingTask = parseInt(getInnerText("ongoingTask"));

  setInnerText("totalTask", totalTask + 1);
  setInnerText("ongoingTask", ongoingTask - 1);
  btnCompleted5.disabled = true;

  let div = document.createElement("div");
  div.innerHTML = `
     <p class="p-3 bg-ligthBg rounded-lg">You have Complete The Task ${taskTitle5} at ${getTimeNow()}</p>
    `;
  activityContainer.appendChild(div);

  alert("Board updated Successfully");
});
btnCompleted6.addEventListener("click", function (e) {
  let taskTitle6 = getInnerText("taskTitle6");
  let totalTask = parseInt(getInnerText("totalTask"));
  let ongoingTask = parseInt(getInnerText("ongoingTask"));

  setInnerText("totalTask", totalTask + 1);
  setInnerText("ongoingTask", ongoingTask - 1);
  btnCompleted6.disabled = true;

  let div = document.createElement("div");
  div.innerHTML = `
     <p class="p-3 bg-ligthBg rounded-lg">You have Complete The Task ${taskTitle6} at ${getTimeNow()}</p>
    `;
  activityContainer.appendChild(div);

  alert("Board updated Successfully");
});

clearActivity.addEventListener("click", function (e) {
  activityContainer.innerHTML = "";
});

btnDiscover.addEventListener("click", function (e) {
  window.location.href = "./blog.html";
});
randomTheme.addEventListener("click", function (e) {
  document.getElementById("mainBody").style.backgroundColor = randomColor();
});

function randomColor() {
  let r = Math.floor(Math.random() * 16) + 230;
  let g = Math.floor(Math.random() * 16) + 230;
  let b = Math.floor(Math.random() * 16) + 230;

  return `rgb(${r}, ${g}, ${b})`;
}

function getInnerText(id) {
  let text = document.getElementById(id).innerText;

  return text;
}
function setInnerText(id, text) {
  document.getElementById(id).innerText = " " + text;
}

function getTimeNow() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = "";

  if (hours >= 12) {
    ampm = "PM";
    hours = hours - 12;
  } else {
    ampm = "AM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  } else if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${hours}:${minutes}:${seconds}:${ampm}`;
}

function setDates() {
  let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  let weekday = weeks[date.getDay()];
  let day = date.getDate();
  let month = months[date.getMonth()]
  let year = date.getFullYear();

  let weekDay = document.getElementById("weekDay");
  let fullDate = document.getElementById("fullDate");

  weekDay.innerText = weekday;
  fullDate.innerText = day + " " + month + " " + year;

  // return `${weekday},${day},${month},${year}`;
}
