let navBtns = document.querySelectorAll(".nav-btns__btn");
let images = document.querySelectorAll(".image");

let counter = 0;
let slide;

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", () => {
    clearTimeout(slide);
    let prevCounter = counter;
    counter = i;
    showPickedSlide(prevCounter, counter);
  });
}

function reset(prev, next) {
  navBtns[prev].classList.remove("active");
  navBtns[next].classList.add("active");
  images[prev].classList.remove("active-img");
  images[next].classList.add("active-img");
  counter = next;
  carousel();
}

function showPickedSlide(prev, current) {
  navBtns[prev].classList.remove("active");
  navBtns[current].classList.add("active");
  images[prev].classList.remove("active-img");
  images[current].classList.add("active-img");
}

function carousel() {
  let slide = setTimeout(() => {
    if (counter === 3) {
      reset(3, 0);
    } else {
      reset(counter, counter + 1);
    }
  }, 12000);
}

carousel();
