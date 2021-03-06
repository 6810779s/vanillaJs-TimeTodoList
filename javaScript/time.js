const time = document.querySelector(".js-clock"),
  clockTitle = time.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours <= 9 ? `0${hours}` : hours}:${
    minutes <= 9 ? `0${minutes}` : minutes
  }:${seconds <= 9 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
