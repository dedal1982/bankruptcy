// Функция для форматирования номера телефона
function formatPhoneNumber(input) {
  let numbers = input.value.replace(/\D/g, "");

  numbers = numbers.slice(0, 11);

  let formattedNumber = "";

  if (numbers.length > 0) {
    formattedNumber = "+7";
  }

  if (numbers.length > 1) {
    formattedNumber += "(" + numbers.substring(1, 4);
  }

  if (numbers.length > 4) {
    formattedNumber += ") " + numbers.substring(4, 7);
  }

  if (numbers.length > 7) {
    formattedNumber += " " + numbers.substring(7, 9);
  }

  if (numbers.length > 9) {
    formattedNumber += " " + numbers.substring(9, 11);
  }

  input.value = formattedNumber;
}
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach((input) => {
  input.addEventListener("input", function () {
    formatPhoneNumber(this);
  });

  input.addEventListener("focusout", function () {
    formatPhoneNumber(this);
  });
});

// Функция открытия галереи
const galleryBtn = document.querySelector(".gallery__top");
const galleryIconArrow = galleryBtn.querySelector("img");
const galleryInner = document.querySelector(".gallery__inner");

if (galleryBtn) {
  galleryBtn.addEventListener("click", () => {
    galleryIconArrow.classList.toggle("active");
    galleryInner.classList.toggle("active");
  });
}

//Активация кнопки согласия и отправки
const checkbox = document.getElementById("agreement");
const submitButton = document.getElementById("submitBtn");

if (checkbox) {
  checkbox.addEventListener("change", () => {
    submitButton.disabled = !checkbox.checked;
  });
}

// Получаем все контейнеры по id
const quiz = document.querySelectorAll(".quiz li input");
const quizTwo = document.querySelectorAll("quizTwo li input");
const quizThree = document.querySelectorAll("quizThree li input");
console.log(quiz);

if (quiz) {
  quiz.forEach((item) => {
    item.addEventListener("click", () => {
      quiz.classList.add("inactive");
      quizTwo.classList.remove("inactive");
    });
  });
}

if (quizTwo) {
  quizTwo.forEach((item) => {
    item.addEventListener("click", () => {
      quizTwo.classList.add("inactive");
      quizThree.classList.remove("inactive");
    });
  });
}
