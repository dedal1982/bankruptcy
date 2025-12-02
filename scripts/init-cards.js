const initGallery = [
  {
    number: "1",
    region: "Region™",
    result: "Result",
  },
  {
    number: "2",
    region: "Region™",
    result: "Result",
  },
  {
    number: "3",
    region: "Region™",
    result: "Result",
  },
  {
    number: "4",
    region: "Region™",
    result: "Result",
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

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу
  if (item.number) {
    caseNumber.textContent = item.number;
  }
  if (item.region) {
    caseRegion.textContent = item.region;
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
