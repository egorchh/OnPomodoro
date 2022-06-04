window.addEventListener("DOMContentLoaded", () => {
  function getZero(number) {
    if (number >= 0 && number <= 9) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  // Таймер

  const timerButton = document.querySelector("#timer-button"),
    buttonText = document.querySelector(".timer-body__button-span"),
    timer = document.querySelector(".timer-body__watch-text");

  let timeMode = 1499,
    clickCounter = 0,
    timeInterval;

  function setTimer() {
    let minutes = Math.floor(timeMode / 60),
      seconds = timeMode % 60;

    timer.innerHTML = `${getZero(minutes)}:${getZero(seconds)}`;

    timeMode--;

    if (timeMode === -1) {
      clearInterval(timeInterval); // Необходимо добавить переключение режима
      timer.innerHTML = `00:00`;
    }
  }

  function updateTimer() {
    let minutes = Math.floor(timeMode / 60),
      seconds = timeMode % 60;

    timer.innerHTML = `${getZero(minutes)}:${getZero(seconds)}`;

    buttonText.innerHTML = "START";
    timerButton.style.bottom = "76px";
    timerButton.style.boxShadow = "0 7px 0px 0 rgba(255, 255, 255, 0.2)";

    if (clickCounter % 2 !== 0) {
      clickCounter--;
    }
  }

  timerButton.addEventListener("click", () => {
    clickCounter++;
    if (clickCounter % 2 !== 0) {
      timeInterval = setInterval(setTimer, 1000);
      buttonText.innerHTML = "STOP";
      timerButton.style.boxShadow = "none";
      timerButton.style.bottom = "70px";
    } else {
      clearInterval(timeInterval);
      buttonText.innerHTML = "START";
      timerButton.style.bottom = "76px";
      timerButton.style.boxShadow = "0 7px 0px 0 rgba(255, 255, 255, 0.2)";
    }
  });

  // Смена режима работы страницы (pomodoro, short break, long break)

  const pomodoro = document.querySelector("#pomodoro"),
    shortBreak = document.querySelector("#short-break"),
    longBreak = document.querySelector("#long-break"),
    timerText = document.querySelector(".timer-body__watch-text"),
    timerDescription = document.querySelector(".timer-description");

  activeMode();

  pomodoro.addEventListener("click", () => {
    clearInterval(timeInterval);
    updateTimer();
    timerText.innerHTML = "25:00";
    timerDescription.innerHTML = "Time to focus!";
    timeMode = 1499;
    activeMode();
  });

  shortBreak.addEventListener("click", () => {
    clearInterval(timeInterval);
    updateTimer();
    timerText.innerHTML = "05:00";
    timerDescription.innerHTML = "Time for a break!";
    timeMode = 299;
    activeMode();
  });

  longBreak.addEventListener("click", () => {
    clearInterval(timeInterval);
    updateTimer();
    timerText.innerHTML = "15:00";
    timerDescription.innerHTML = "Time for a long break!";
    timeMode = 899;
    activeMode();
  });

  function activeMode() {
    if (timeMode === 1499) {
      pomodoro.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      shortBreak.style.backgroundColor = "transparent";
      longBreak.style.backgroundColor = "transparent";
    } else if (timeMode === 299) {
      shortBreak.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      pomodoro.style.backgroundColor = "transparent";
      longBreak.style.backgroundColor = "transparent";
    } else if (timeMode === 899) {
      longBreak.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      pomodoro.style.backgroundColor = "transparent";
      shortBreak.style.backgroundColor = "transparent";
    }
  }
});
