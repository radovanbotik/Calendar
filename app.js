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
