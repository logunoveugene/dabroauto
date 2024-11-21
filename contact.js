var screenWidth = window.innerWidth;
var contacts = `  `;

document.querySelector("#contact").innerHTML = contacts;

function printYaMap() {
  ymaps.ready(init);

  function init() {
    var zoomLevel;
    var center;

    if (screenWidth > 1200) {
      zoomLevel = 12;
      center = [43.121656, 131.910374];
    } else {
      zoomLevel = 11; // Зум для мобильных устройств
      center = [43.150813, 131.931514];
    }

    // Инициализация карты
    var myMap = new ymaps.Map("map", {
      center: center, // Центр карты между двумя точками
      zoom: zoomLevel, // Масштаб карты
      controls: [], // Отключаем все контроллы
    });

    // Отключаем возможность масштабирования карты с помощью скролла мыши
    myMap.behaviors.disable("scrollZoom");

    // Добавляем только контролы для управления масштабом (плюс и минус)
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        position: { right: 10, top: 50 }, // Переносим контрол вправо
        size: "small", // Устанавливаем размер кнопок
      },
    });
    myMap.controls.add(zoomControl);

    // Создание пина 1
    var placemark1 = new ymaps.Placemark(
      [43.121656, 131.910374],
      {
        hintContent: "улица Пушкина",
        balloonContent: "улица Пушкина",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "./assets/images/pin.svg", // Путь к вашему SVG файлу для первого пина
        iconImageSize: [30, 42], // Размер иконки
        iconImageOffset: [-15, -42], // Смещение иконки
      }
    );

    // Добавляем метки на карту
    myMap.geoObjects.add(placemark1);
  }
}

function loadYandexMapsScript() {
  const script = document.createElement("script");
  script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
  script.type = "text/javascript";
  script.onload = function () {
    printYaMap();
  };
  document.head.appendChild(script);
}

loadYandexMapsScript();
