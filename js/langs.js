const en = {
  statisticSpan: "Statistic",
  languageSpan: "Language",
  settingsSpan: "Settings",
  loginSpan: "Login",
  pomodoro: "Pomodoro",
  shortBreak: "Short Break",
  longBreak: "Long Break",
};
const ru = {
  statisticSpan: "Статистика",
  languageSpan: "Выбрать язык",
  settingsSpan: "Настройки",
  loginSpan: "Войти",
  pomodoro: "Помодоро",
  shortBreak: "Короткий перерыв",
  longBreak: "Длинный перерыв",
};

const ruLang = document.getElementById("ru"),
  enLang = document.getElementById("en");

ruLang.addEventListener("click", () => {
  changeLang(ru);
});

enLang.addEventListener("click", () => {
  changeLang(en);
});

function changeLang(language) {
  let lengthObj = Object.getOwnPropertyNames(language).length;
  for (var i = 0; i <= lengthObj - 1; i++) {
    let objKey = Object.getOwnPropertyNames(language)[i];
    if (document.getElementById(objKey) === null) {
      document.querySelector(`[data-name=${objKey}]`).innerText = func(objKey);
    } else {
      document.getElementById(objKey).innerText = func(objKey);
    }
  }

  function func(a) {
    for (let key in language) {
      if (key === a) {
        return language[key];
      }
    }
  }
}
