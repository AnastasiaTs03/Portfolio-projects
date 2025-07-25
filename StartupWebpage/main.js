let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
}

function changeSlide(direction) {
    let newIndex = currentSlide + direction;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
}

function setSlide(index) {
    showSlide(index);
}


setInterval(() => {
    changeSlide(1);
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.querySelector(".signUp");
  const logInBtn = document.querySelector(".logIn");
  const forms = document.querySelectorAll(".form");

  signUpBtn.onclick = function () {
    forms[0].classList.add("active");
    forms[1].classList.remove("active");

    signUpBtn.classList.add("active");
    logInBtn.classList.remove("active");
  };

  logInBtn.onclick = function () {
    forms[1].classList.add("active");
    forms[0].classList.remove("active");

    logInBtn.classList.add("active");
    signUpBtn.classList.remove("active");
  };
});