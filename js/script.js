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
    timerDescription = document.querySelector(".timer-description"),
    pomodoroBody = document.querySelector(".first-color"),
    header = document.querySelector(".header"),
    footer = document.querySelector(".footer"),
    descriptionLink = document.querySelectorAll(".description__link"),
    timerCurrent = document.querySelector(".timer-counter__current"),
    timerTotal = document.querySelector(".timer-counter__total");

  activeMode();

  pomodoro.addEventListener("click", () => {
    clearInterval(timeInterval);
    updateTimer();
    timerText.innerHTML = "25:00";
    timerDescription.innerHTML = "Time to focus!";
    // timeMode = 1499;
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
      pomodoro.style.border = "none";
      shortBreak.style.border = "2px solid rgba(255, 255, 255, 0.4)";
      longBreak.style.border = "2px solid rgba(255, 255, 255, 0.4)";

      pomodoroBody.style.backgroundColor = "#d95550";
      header.style.backgroundColor = "tomato";
      footer.style.backgroundColor = "tomato";

      descriptionLink.forEach((link) => {
        link.style.color = "tomato";
      });
    } else if (timeMode === 299) {
      shortBreak.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      pomodoro.style.backgroundColor = "transparent";
      longBreak.style.backgroundColor = "transparent";
      shortBreak.style.border = "none";
      pomodoro.style.border = "2px solid rgba(255, 255, 255, 0.4)";
      longBreak.style.border = "2px solid rgba(255, 255, 255, 0.4)";

      pomodoroBody.style.backgroundColor = "#018786";
      header.style.backgroundColor = "#03c2af";
      footer.style.backgroundColor = "#03c2af";

      descriptionLink.forEach((link) => {
        link.style.color = "#03c2af";
      });
    } else if (timeMode === 899) {
      longBreak.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      pomodoro.style.backgroundColor = "transparent";
      shortBreak.style.backgroundColor = "transparent";
      longBreak.style.border = "none";
      pomodoro.style.border = "2px solid rgba(255, 255, 255, 0.4)";
      shortBreak.style.border = "2px solid rgba(255, 255, 255, 0.4)";

      pomodoroBody.style.backgroundColor = "#0D47A1";
      header.style.backgroundColor = "#1976D2";
      footer.style.backgroundColor = "#1976D2";

      descriptionLink.forEach((link) => {
        link.style.color = "#1976D2";
      });
    }
  }
});

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a?", "");
//     this.b = +prompt("b?", "");
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// const user = {
//   name: "Egor",
//   adress: {
//     street: {
//       name: "Kantemir",
//       number: 24,
//     },
//     city: "SPB",
//   },
// };

// console.log(user.name);
// console.log(user?.adress?.street?.name);

var words = [
  "Ночь",
  "Улица",
  "Фонарь",
  "Аптека",
  "Бессмысленный",
  "Тусклый",
  "Свет",
];

console.log(getLastElementOfArray(words)); // возвращает Свет;

function getLastElementOfArray(array) {
  return array.pop();
}
