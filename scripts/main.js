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
    window.scrollTo({ top: 0 });
  });
}

//Активация кнопки согласия и отправки
const checkboxBtn = document.getElementById("agreement");
const submitButton = document.getElementById("submitBtn");

if (checkboxBtn) {
  checkboxBtn.addEventListener("change", () => {
    submitButton.disabled = !checkboxBtn.checked;
  });
}

// Получаем все контейнеры по id
const quiz = document.getElementById("quiz");
const quizItems = quiz.querySelectorAll("ul li input");
const quizTwo = document.getElementById("quizTwo");
const quizItemsTwo = quizTwo.querySelectorAll("ul li input");
const quizThree = document.getElementById("quizThree");
const quizItemsThree = quizThree.querySelectorAll("ul li input");
const quizFour = document.getElementById("quizFour");

if (quiz) {
  quizItems.forEach((item) => {
    item.addEventListener("click", () => {
      quiz.classList.add("inactive");
      quizTwo.classList.remove("inactive");
    });
  });
}

if (quizTwo) {
  quizItemsTwo.forEach((item) => {
    item.addEventListener("click", () => {
      quizTwo.classList.add("inactive");
      quizThree.classList.remove("inactive");
    });
  });
}

if (quizThree) {
  quizItemsThree.forEach((item) => {
    item.addEventListener("click", () => {
      quizThree.classList.add("inactive");
      quizFour.classList.remove("inactive");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-modal");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      fetch("/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          alert(response.message);
          galleryIconArrow.classList.toggle("active");
          galleryInner.classList.toggle("active");
          window.scrollTo({ top: 0 });
          form.reset();
        })
        .catch((error) => {
          alert("Произошла ошибка при отправке формы");
          console.error(error);
        });
    });
  }
});
