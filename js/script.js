import changeLinkColor from "./langs.js";

window.addEventListener("DOMContentLoaded", () => {
  function getZero(number) {
    if (number >= 0 && number <= 9) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  // Смена режима работы страницы (pomodoro, short break, long break)

  const pomodoro = document.querySelector("#pomodoro"),
    shortBreak = document.querySelector("#short-break"),
    longBreak = document.querySelector("#long-break"),
    timerText = document.querySelector(".timer-body__watch-text"),
    timerDescription = document.querySelector(".timer-description"),
    pomodoroBody = document.querySelector(".first-color"),
    header = document.querySelector(".header"),
    footer = document.querySelector(".footer"),
    descriptionLink = document.querySelectorAll(".description__link"),
    timerCurrent = document.querySelector(".timer-counter__current"),
    timerTotal = document.querySelector(".timer-counter__total"),
    timer = document.querySelector(".timer-body__watch-text"),
    timerButton = document.querySelector("#timer-button"),
    buttonText = document.querySelector(".timer-body__button-span");

  let timeMode = +localStorage.getItem("timeMode") || 1499,
    clickCounter = 0,
    timeInterval;

  activeMode(timeMode);
  updateTimer(timeMode);

  pomodoro.addEventListener("click", () => {
    localStorage.setItem("timeMode", 1499);
    timeMode = 1499;

    clearInterval(timeInterval);
    updateTimer(+localStorage.getItem("timeMode"));
    timerText.innerHTML = "25:00";
    if (localStorage.getItem("language") === "ru") {
      timerDescription.innerHTML = "Время учиться!";
    } else {
      timerDescription.innerHTML = "Time to focus!";
    }

    activeMode(+localStorage.getItem("timeMode"));
  });

  shortBreak.addEventListener("click", () => {
    localStorage.setItem("timeMode", 299);
    timeMode = 299;

    clearInterval(timeInterval);
    updateTimer(+localStorage.getItem("timeMode"));
    timerText.innerHTML = "05:00";
    if (localStorage.getItem("language") === "ru") {
      timerDescription.innerHTML = "Время сделать перерыв!";
    } else {
      timerDescription.innerHTML = "Time for a break!";
    }

    activeMode(+localStorage.getItem("timeMode"));
  });

  longBreak.addEventListener("click", () => {
    localStorage.setItem("timeMode", 899);
    timeMode = 899;

    clearInterval(timeInterval);
    updateTimer(+localStorage.getItem("timeMode"));
    timerText.innerHTML = "15:00";
    if (localStorage.getItem("language") === "ru") {
      timerDescription.innerHTML = "Время отдохнуть!";
    } else {
      timerDescription.innerHTML = "Time for a long break!";
    }

    activeMode(+localStorage.getItem("timeMode"));
  });

  pomodoro.style.transition = "background-color 0.3s";
  shortBreak.style.transition = "background-color 0.3s";
  longBreak.style.transition = "background-color 0.3s";

  const firstBackColor = document.querySelector(".first-color");

  function activeMode(timeMode) {
    if (timeMode === 1499) {
      pomodoro.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      shortBreak.style.backgroundColor = "transparent";
      longBreak.style.backgroundColor = "transparent";

      pomodoroBody.style.backgroundColor = "#d95550";
      header.style.backgroundColor = "tomato";
      footer.style.backgroundColor = "tomato";

      changeLinkColor();
    } else if (timeMode === 299) {
      shortBreak.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      pomodoro.style.backgroundColor = "transparent";
      longBreak.style.backgroundColor = "transparent";

      pomodoroBody.style.backgroundColor = "#018786";
      header.style.backgroundColor = "#03c2af";
      footer.style.backgroundColor = "#03c2af";

      changeLinkColor();
    } else if (timeMode === 899) {
      longBreak.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      pomodoro.style.backgroundColor = "transparent";
      shortBreak.style.backgroundColor = "transparent";

      pomodoroBody.style.backgroundColor = "#0D47A1";
      header.style.backgroundColor = "#1976D2";
      footer.style.backgroundColor = "#1976D2";

      changeLinkColor();
    }
  }

  // Таймер

  function setTimer() {
    let minutes = Math.floor(timeMode / 60),
      seconds = timeMode % 60;

    timer.innerHTML = `${getZero(minutes)}:${getZero(seconds)}`;

    timeMode -= 1;

    if (timeMode === -1) {
      clearInterval(timeInterval); // Необходимо добавить переключение режима
      timer.innerHTML = `00:00`;
    }
  }

  function updateTimer(timeMode) {
    let minutes = Math.floor((+timeMode + 1) / 60),
      seconds = (+timeMode + 1) % 60;

    timer.innerHTML = `${getZero(minutes)}:${getZero(seconds)}`;

    if (localStorage.getItem("language") === "ru") {
      buttonText.innerHTML = "СТАРТ";
    } else {
      buttonText.innerHTML = "START";
    }
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

      if (localStorage.getItem("language") === "ru") {
        buttonText.innerHTML = "СТОП";
      } else {
        buttonText.innerHTML = "STOP";
      }
      timerButton.style.boxShadow = "none";
      timerButton.style.bottom = "70px";
    } else {
      clearInterval(timeInterval);
      if (localStorage.getItem("language") === "ru") {
        buttonText.innerHTML = "СТАРТ";
      } else {
        buttonText.innerHTML = "START";
      }
      timerButton.style.bottom = "76px";
      timerButton.style.boxShadow = "0 7px 0px 0 rgba(255, 255, 255, 0.2)";
    }
  });

  // modal

  // modal-language

  const closeModal = document.querySelector(".modal__close-img"),
    langBtn = document.getElementById("language"),
    modal = document.querySelector(".modal");

  function showModal() {
    modal.style.display = "block";
  }
  function hideModal() {
    modal.style.display = "none";
  }

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  langBtn.addEventListener("click", () => {
    showModal();
  });

  closeModal.addEventListener("click", () => {
    hideModal();
  });
});
