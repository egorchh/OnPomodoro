form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  onSubmitStart();
  await fetch(
    `https://api.nomoreparties.co/github-search?q=${event.target.elements["title"].value}`
  )
    .then((r) => r.json())
    .then((data) => {
      if (data.total_count === 0) {
        renderEmptyResults();
      } else {
        renderCount(data.total_count);
        for (let item of data.items) {
          resultsContainer.appendChild(tempalte(item));
        }
      }
    })
    .catch(() => {
      renderError();
    });
}

async function onSubmit(event) {
  event.preventDefault();
  onSubmitStart();
  await fetch(
    `https://api.nomoreparties.co/github-search?q=${event.target.elements["title"].value}`
  )
    .then((r) => r.json())
    .then((data) => {
      const { items, total_count } = data;
      if (total_count) {
        renderCount(total_count);
        items.forEach((item) => resultsContainer.appendChild(template(item)));
      } else {
        renderEmptyResults();
      }
    })
    .catch(() => {
      renderError();
    });
}

form.addEventListener("submit", onSubmit);

////////////////////////////////////////////////////////////////

function dirReduc(arr) {
  let newArr = [];
  let xCounter = 0,
    yCounter = 0;

  arr.forEach((item) => {
    switch (item) {
      case "NORTH":
        yCounter++;
        break;
      case "SOUTH":
        yCounter--;
        break;
      case "WEST":
        xCounter++;
        break;
      case "EAST":
        xCounter--;
        break;
    }
  });

  if (xCounter > 0 && yCounter === 0) {
    for (let i = 0; i < xCounter; i++) {
      newArr.push("WEST");
    }
  } else if (xCounter < 0 && yCounter === 0) {
    for (let i = 0; i > xCounter; i--) {
      newArr.push("EAST");
    }
  } else if (yCounter > 0 && xCounter === 0) {
    for (let i = 0; i < yCounter; i++) {
      newArr.push("NORTH");
    }
  } else if (yCounter < 0 && xCounter === 0) {
    for (let i = 0; i > yCounter; i--) {
      newArr.push("SOUTH");
    }
  } else if (xCounter === 0 && yCounter === 0) {
    return newArr;
  }

  return newArr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

function extractCurrencyValue(str) {
  return str.slice(1);
}

console.log(extractCurrencyValue("$120"));
