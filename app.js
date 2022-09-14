const allmonths = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const months = document.querySelectorAll(".month");
const chevronRight = document.querySelector(".chevron_right");
const chevronLeft = document.querySelector(".chevron_left");
months.forEach((month, index) => {
  month.style.left = `${index * 100}%`;
});
const checkCurrentMonth = () => {
  const currentMonth = new Date().getMonth();
  return currentMonth;
};
let counter = checkCurrentMonth();

const translateX = counter => {
  months.forEach(month => {
    month.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const daysInCurrentMonth = () => {
  return wholeYear[counter];
};

const date = new Date(2022, 0, 1);
const days2022 = [];
for (let i = 1; i <= 365; i++) {
  days2022.push(new Date(2022, 0, `${i}`));
}

const wholeYear = allmonths.map((month, index) => {
  return (month = new Array(
    days2022.filter(entry => {
      return entry.getMonth() === index;
    })
  ));
});

const createDays = () => {
  const daysContainer =
    months[counter].parentElement.parentElement.nextElementSibling
      .nextElementSibling;
  const currentMonthDays = daysInCurrentMonth()[0];
  const daysHTML = currentMonthDays
    .map((day, index) => {
      return `
    <li class="day">${index + 1}</li>
    `;
    })
    .join("");
  console.log(daysHTML);
  daysContainer.innerHTML = daysHTML;
};

chevronRight.addEventListener("click", e => {
  counter++;
  if (counter > months.length - 1) {
    counter = 0;
  }
  translateX(counter);
  createDays();
  console.log(daysInCurrentMonth());
});
chevronLeft.addEventListener("click", e => {
  counter--;
  if (counter < 0) {
    counter = months.length - 1;
  }
  translateX(counter);
  createDays();
  console.log(daysInCurrentMonth());
});

window.addEventListener("DOMContentLoaded", () => {
  translateX(counter);
  createDays();
});
