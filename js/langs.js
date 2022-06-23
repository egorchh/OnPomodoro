function changeLinkColor() {
  var descriptionLinks = document.querySelectorAll(".description__link");

  if (+localStorage.getItem("timeMode") === 1499) {
    descriptionLinks.forEach((link) => {
      link.classList.add("pomodoro");
      link.classList.remove("shortBreak");
      link.classList.remove("longBreak");
    });
  } else if (+localStorage.getItem("timeMode") === 299) {
    descriptionLinks.forEach((link) => {
      link.classList.add("shortBreak");
      link.classList.remove("longBreak");
      link.classList.remove("pomodor");
    });
  } else if (+localStorage.getItem("timeMode") === 899) {
    descriptionLinks.forEach((link) => {
      link.classList.add("longBreak");
      link.classList.remove("shortBreak");
      link.classList.remove("pomodor");
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const languages = {
    en: {
      statisticSpan: "Statistic",
      languageSpan: "Language",
      settingsSpan: "Settings",
      loginSpan: "Login",
      pomodoro: "Pomodoro",
      shortBreak: "Short Break",
      longBreak: "Long Break",
      start: "START",
      timeTo: "Time to focus!",
      tasks: "Tasks",
      addTask: "Add Task",
      descrTitle: "Boost your productivity",
      whatIsOnPomodoro: "What is OnPomodoro?",
      onPomodoroIs: `<b class="bold">OnPomodoro</b> is a customizable pomodoro timer
                that works on desktop & mobile browser. The aim of this app is
                to help you focus on any task you are working on, such as study,
                writing, or coding. This app is inspired by
                <a
                  class="description__link"
                  href="https://todoist.com/productivity-methods/pomodoro-technique"
                  target="_blank"
                  >Pomodoro Technique</a
                >
                which is a time management method developed by Francesco
                Cirillo.`,
      pomodoroTechniqueTitle: "What is Promodoro Technique?",
      pomodoroTechnique: `
    The Pomodoro Technique is created by Francesco Cirillo for a
                more productive way to work and study. The technique uses a
                timer to break down work into intervals, traditionally 25
                minutes in length, separated by short breaks. Each interval is
                known as a pomodoro, from the Italian word for 'tomato', after
                the tomato-shaped kitchen timer that Cirillo used as a
                university student -
                <a
                  class="description__link"         
                  href="https://todoist.com/productivity-methods/pomodoro-technique"
                  target="_blank"
                  >Wikipedia</a
                >
    `,
      howToUseTitle: `How to use Promodoro Timer?`,
      howToUse: `
    <li class="instruction__item">
      <b class="bold">Add tasks</b> to work on today
    </li>
    <li class="instruction__item">
      <b class="bold">Set estimate pomodoros</b> (1 = 25min of
      work) for each tasks
    </li>
    <li class="instruction__item">
      <b class="bold">Select a task</b> to work on
    </li>
    <li class="instruction__item">
      <b class="bold">Start timer</b> and focus on the task for
      25 minutes
    </li>
    <li class="instruction__item">
      <b class="bold">Take a break</b> for 5 minutes when the
      alarm ring
    </li>
    <li class="instruction__item">
      <b class="bold">Iterate</b> 3-5 until you finish the tasks
    </li>
    `,
      featuresTitle: `Features`,
      features: `
    <li class="instruction__item">
      <b class="bold">Responsive design</b> that works with
      desktop and mobile
    </li>
    <li class="instruction__item">
      <b class="bold">Color transition</b> to switch moods
      between work time and rest time
    </li>
    <li class="instruction__item">
      <b class="bold">Audio notification</b> at the end of a
      timer period
    </li>
    <li class="instruction__item">
      <b class="bold">Customizable timer</b> intervals to suit
      your preference
    </li>
    <li class="instruction__item">
      <b class="bold">Multiple interface languages</b>
    </li>
    `,
      aboutTitle: "About author and project",
      about: `
    Hi! My name is
    <a
      class="description__link"
      href="https://github.com/egorchh"
      target="_blank"
      >Egor Podolskij</a
    >
    and I'm begginer Frontend-developer from Russia. This site is my
    first own project. I borrowed some of the design and interface
    with
    <a
      class="description__link"
      href="https://pomofocus.io/"
      target="_blank"
      >Pomofocus</a
    >
    .
    `,
      home: "home",
      privacy: "privacy",
      contacts: "contacts",
      simplePage: "simple page",
      madeWithLove: "Made with love by Egor Podolskij",
      chooseLang: "Choose language",
      soon: "More languages will be added soon ;)",
    },
    ru: {
      statisticSpan: "Статистика",
      languageSpan: "Выбрать язык",
      settingsSpan: "Настройки",
      loginSpan: "Войти",
      pomodoro: "Помодоро",
      shortBreak: "Перерыв",
      longBreak: "Долгий перерыв",
      start: "СТАРТ",
      timeTo: "Время учиться!",
      tasks: "Задачи",
      addTask: "Добавить задачу",
      descrTitle: "Улучшите свою продуктивность",
      whatIsOnPomodoro: `Что такое <a
                  class="description__link"
                  href="#"
                  >OnPomodoro</a
                >?`,
      onPomodoroIs: `<a
            
                  class="description__link"
                  href="#"
                  >OnPomodoro</a
                > - настраиваемый таймер, работающий как на десктопе, так и на мобильном устройстве. Цель этого приложения - помочь вам сосредоточиться на любой задаче, над которой вы работаете, такой как обучение или кодирование. Это приложение вдохновлено 
                <a
                  class="description__link"           
                  href="https://todoist.com/productivity-methods/pomodoro-technique"
                  target="_blank"
                  >Pomodoro Technique</a
                >
                , методом управления временем, разработанный Франческо Сирильо.`,
      pomodoroTechniqueTitle: "Что из себя представляет методика Помодоро?",
      pomodoroTechnique: `
    Методика Помодоро создана Франческо Сирильо для более продуктивной работы и обучения. Методика использует таймер, чтобы разбить работу на интервалы, традиционно длиной 25 минут, разделённые короткими перерывами. Каждый интервал известен как помодоро, от итальянского слова «томат», после томатообразного кухонного таймера, который Сирильо использовал, когда был студентом университета -
                <a
                  class="description__link"
            
                  href="https://todoist.com/productivity-methods/pomodoro-technique"
                  target="_blank"
                  >Wikipedia</a
                >
    `,
      howToUseTitle: `Как пользоваться таймером Помодоро?`,
      howToUse: `
    <li class="instruction__item">
      <b class="bold">Добавьте задачи</b>, требующие решения
    </li>
    <li class="instruction__item">
      <b class="bold">Установите помодорки</b> (1 = 25мин. работы) для каждой из задач
    </li>
    <li class="instruction__item">
      <b class="bold">Выберите задачу</b>, над которой хотите поработать
    </li>
    <li class="instruction__item">
      <b class="bold">Запустите таймер</b> и сфокусируйтесь на решении задачи в течение 25 минут
    </li>
    <li class="instruction__item">
      <b class="bold">Отдохните</b> в течение 5 минут, когда будильник зазвенит
    </li>
    <li class="instruction__item">
      <b class="bold">Повторяйте</b> пункты 3-5, пока задача не будет решена
    </li>
    `,
      featuresTitle: `Особенности`,
      features: `
    <li class="instruction__item">
      <b class="bold">Отзывчивый дизайн</b>, который работает как с десктопами, так и с мобильными устройствами
    </li>
    <li class="instruction__item">
      <b class="bold">Цветовой переход</b> при смене режима работы
    </li>
    <li class="instruction__item">
      <b class="bold">Звуковое уведомление</b> в конце каждого временного периода
    </li>
    <li class="instruction__item">
      <b class="bold">Настраиваемые интервалы</b> таймера
    </li>
    <li class="instruction__item">
      <b class="bold">Возможность переключения языка</b> интерфейса
    </li>
    `,
      aboutTitle: "Об авторе и проекте",
      about: `
    Привет! Меня зовут
    <a
      class="description__link"
      href="https://github.com/egorchh"
      target="_blank"
      >Егор Подольский</a
    >
    и я начинающий Фронтенд-разработчик из России. Этот сайт является моим первым самостоятельным проектом. Я позаимствовал некоторые элементы дизайна и интерфейса с сайта
    <a
      class="description__link"
      href="https://pomofocus.io/"
      target="_blank"
      >Pomofocus</a
    >
    .
    `,
      home: "домашняя страница",
      privacy: "приватность",
      contacts: "контакты",
      simplePage: "упрощённая страница",
      madeWithLove: "Сделано с любовью <3",
      chooseLang: "Выберите язык",
      soon: "Другие языки находятся в разработке ;)",
    },
  };

  getLocalLang();

  const ruLang = document.getElementById("ru"),
    enLang = document.getElementById("en");

  ruLang.addEventListener("click", () => {
    changeLang(languages.ru);
    saveLocalLang("ru");
    document.body.style.fontFamily = "'Nunito', sans-serif";
  });

  enLang.addEventListener("click", () => {
    changeLang(languages.en);
    saveLocalLang("en");
    document.body.style.fontFamily = '"Baloo Da 2", cursive';
  });

  function changeLang(language) {
    let objLength = Object.getOwnPropertyNames(language).length;

    for (var i = 0; i <= objLength - 1; i++) {
      let objKey = Object.getOwnPropertyNames(language)[i];
      if (document.getElementById(objKey) === null) {
        document.querySelector(`[data-name=${objKey}]`).innerText =
          func(objKey);
      } else {
        document.getElementById(objKey).innerHTML = func(objKey);
      }
    }

    function func(a) {
      for (let key in language) {
        if (key === a) {
          return language[key];
        }
      }
    }

    changeLinkColor();
  }

  function saveLocalLang(language) {
    localStorage.setItem("language", language);
  }

  function getLocalLang() {
    let currentLang = localStorage.getItem("language");

    if (currentLang === "ru") {
      changeLang(languages.ru);
      document.body.style.fontFamily = "'Nunito', sans-serif";
    } else if (currentLang === "en" || currentLang === null) {
      changeLang(languages.en);
    }
  }
});

export default changeLinkColor;
