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

document.querySelector('.create-account').addEventListener('click', () => {
  document.getElementById('account').scrollIntoView({ behavior: 'smooth' });
});










let currentSlide2 = 0;
const slides2 = document.querySelectorAll(".slide2");
const dots2 = document.querySelectorAll(".dot2");

function showSlide2(index) {
  slides2.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots2[i].classList.toggle("active", i === index);
  });
  currentSlide2 = index;
}

function changeSlide2(direction) {
  let newIndex = currentSlide2 + direction;
  if (newIndex < 0) newIndex = slides2.length - 1;
  if (newIndex >= slides2.length) newIndex = 0;
  showSlide2(newIndex);
}

function setSlide2(index) {
  showSlide2(index);
}

dots2.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    setSlide2(index);
  });
});


setInterval(() => {
  changeSlide2(1);
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




const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".plan-short-btn");

        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const plan = this.closest(".plan");
                const planInfo = plan.querySelector(".plan-info");
              
                planInfo.classList.toggle("show");

                if (planInfo.classList.contains("show")) {
                    this.textContent = "Hide details";
                } else {
                    this.textContent = "See details";
                }
            });
        });
    });