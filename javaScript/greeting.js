const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
}

function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove("showing");
  greetings.classList.add("showing");
  greetings.innerText = `Hello ${text}`;
  saveName(text);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
