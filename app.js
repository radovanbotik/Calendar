const months = document.querySelectorAll(".month");
const chevronRight = document.querySelector(".chevron_right");
const chevronLeft = document.querySelector(".chevron_left");
months.forEach((month, index) => {
  month.style.left = `${index * 100}%`;
});
let counter = 0;
const translateX = counter => {
  months.forEach((month, index) => {
    month.style.transform = `translateX(-${counter * 100}%)`;
  });
};

chevronRight.addEventListener("click", e => {
  counter++;
  if (counter > months.length - 1) {
    counter = 0;
  }
  translateX(counter);
  console.log(counter);
});
chevronLeft.addEventListener("click", e => {
  counter--;
  if (counter < 0) {
    counter = months.length - 1;
  }
  translateX(counter);
  console.log(counter);
});

const date = new Date(2022, 0, 1);
const days2022 = [];
for (let i = 1; i <= 365; i++) {
  days2022.push(new Date(2022, 0, `${i}`));
}
const january = days2022.filter(entry => {
  return entry.getMonth() === 0;
});

console.log(january);
