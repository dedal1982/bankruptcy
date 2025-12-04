const initGallery = [
  {
    number: "А05-7344/2023",
    region: "Архангельская область",
    date: "20.10.2025",
    result: "завершено освобождением гражданина от долгов",
  },
  {
    number: "А05-1455/2025",
    region: "Архангельская область",
    date: "05.11.2025",
    result: "завершено освобождением гражданина от долгов",
  },
  {
    number: "А05-14146/2024",
    region: "Архангельская область",
    date: "28.05.2025",
    result: "завершено освобождением гражданина от долгов",
  },
  {
    number: "А05-1836/2025",
    region: "Архангельская область",
    date: "25.11.2025",
    result: "завершено освобождением гражданина от долгов",
  },
  {
    number: "А13-1842/2025",
    region: "Вологодская область",
    date: "02.10.2025",
    result: "завершено освобождением гражданина от долгов",
  },
  {
    number: "А13-1531/2025",
    region: "Вологодская область",
    date: "17.11.2025",
    result: "завершено освобождением гражданина от долгов",
  },
  {
    number: "А13-713/2025",
    region: "Вологодская область",
    date: "27.08.2025",
    result: "завершено освобождением гражданина от долгов",
  },
  {
    number: "А29-2820/2024",
    region: "Республика Коми",
    date: "27.10.2024",
    result: "завершено освобождением гражданина от долгов",
  },
];

//инициализация карточек каталог

const itemTemplate = document.getElementById("galleryGrid").content;
const elements = document.querySelector(".gallery__grid");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const caseNumber = htmlElement.querySelector(".case-number span");
  const caseRegion = htmlElement.querySelector(".case-region span");
  const caseResult = htmlElement.querySelector(".case-result span");
  const caseDate = htmlElement.querySelector(".case-date span");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу
  if (item.number) {
    caseNumber.textContent = item.number;
  }
  if (item.region) {
    caseRegion.textContent = item.region;
  }
  if (item.date) {
    caseDate.textContent = item.date;
  }
  if (item.result) {
    caseResult.textContent = item.result;
  }

  return htmlElement;
}

initGallery.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
