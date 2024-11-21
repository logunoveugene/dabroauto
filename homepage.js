import EmblaCarousel from "embla-carousel";

import VenoBox from "venobox";
import "venobox/dist/venobox.min.css";
// Схема работы
(function () {
  document.querySelectorAll(".steps__item").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".steps__item");
      const isExpanded = item.classList.contains("steps__item--expanded");

      item.classList.toggle("steps__item--expanded", !isExpanded);
      item
        .querySelector(".steps__header")
        .setAttribute("aria-expanded", !isExpanded);
    });
  });
})();

// Расчет доставки
(function () {
  // JSON данные
  const deliveryData = [
    {
      city: "Хабаровск",
      rates: { sedan: 20000, jeep: 30000, truck: 30000, minibus: 30000 },
      travelTimeDays: 2,
    },
    {
      city: "Благовещенск",
      rates: { sedan: 25000, jeep: 35000, truck: 35000, minibus: 35000 },
      travelTimeDays: 4,
    },
    {
      city: "Чита",
      rates: { sedan: 55000, jeep: 85000, truck: 85000, minibus: 85000 },
      travelTimeDays: 7,
    },
    {
      city: "Москва",
      rates: {
        sedan: 165000,
        jeep: 195000,
        truck: 195000,
        minibus: 195000,
      },
      travelTimeDays: 45,
    },
  ];

  // Ссылки на элементы DOM
  const cityInput = document.getElementById("destination");
  const calculateButton = document.querySelector(".delivery__calculate");
  const vehicleInputs = document.querySelectorAll('input[name="vehicle"]');

  // Создаем элемент для вывода результата
  const result = document.createElement("div");
  result.classList.add("delivery__result");
  document.querySelector(".delivery__content").appendChild(result);

  // Подсказки для ввода города
  cityInput.addEventListener("input", () => {
    const query = cityInput.value.toLowerCase();
    const suggestions = deliveryData
      .filter((entry) => entry.city.toLowerCase().includes(query))
      .map((entry) => entry.city);

    let suggestionsContainer = document.querySelector(".delivery__suggestions");

    if (!suggestionsContainer) {
      suggestionsContainer = document.createElement("div");
      suggestionsContainer.classList.add("delivery__suggestions");
      cityInput.parentNode.appendChild(suggestionsContainer);
    }

    if (suggestions.length > 0) {
      const suggestionsList = suggestions
        .map((city) => `<div class="suggestion">${city}</div>`)
        .join("");
      suggestionsContainer.innerHTML = suggestionsList;

      // Добавляем обработчик выбора подсказки
      document.querySelectorAll(".suggestion").forEach((item) => {
        item.addEventListener("click", () => {
          cityInput.value = item.textContent;
          suggestionsContainer.innerHTML = "";
        });
      });
    } else {
      suggestionsContainer.innerHTML = `<div class="suggestion">Город не найден</div>`;
    }
  });

  // Удаление подсказок при клике за их пределами
  document.addEventListener("click", (event) => {
    const suggestionsContainer = document.querySelector(
      ".delivery__suggestions"
    );
    if (
      suggestionsContainer &&
      !cityInput.contains(event.target) &&
      !suggestionsContainer.contains(event.target)
    ) {
      suggestionsContainer.remove();
    }
  });

  // Логика расчета
  calculateButton.addEventListener("click", () => {
    const selectedVehicle = Array.from(vehicleInputs).find(
      (input) => input.checked
    )?.value;
    const destination = cityInput.value.trim();

    if (!selectedVehicle || !destination) {
      result.textContent =
        "Пожалуйста, выберите тип авто и укажите город назначения.";
      return;
    }

    const cityData = deliveryData.find((entry) => entry.city === destination);

    if (!cityData) {
      result.textContent = "Указанный город не найден. Попробуйте снова.";
      return;
    }

    const cost = cityData.rates[selectedVehicle];
    const time = cityData.travelTimeDays;

    if (!cost) {
      result.textContent = `Стоимость для типа авто "${selectedVehicle}" недоступна для города "${destination}".`;
      return;
    }

    result.textContent = `Стоимость доставки: ${cost} руб. Срок: ${time} дней.`;
  });
})();

// Карусель команды на главной
(function () {
  var screenWidth = window.innerWidth;
  var slidesToScroll;
  if (screenWidth > 1200) {
    slidesToScroll = 5;
  } else {
    slidesToScroll = "auto";
  }

  const emblaNode = document.querySelector(".team-slider");
  const options = { loop: false, slidesToScroll: slidesToScroll };
  const emblaApi = EmblaCarousel(emblaNode, options);

  const prevButton = document.querySelector(".team-slider .embla__button--prev");
  const nextButton = document.querySelector(".team-slider .embla__button--next");

  const setButtonStates = () => {
    if (emblaApi.canScrollPrev()) {
      prevButton.classList.remove("embla__button--disabled");
    } else {
      prevButton.classList.add("embla__button--disabled");
    }

    if (emblaApi.canScrollNext()) {
      nextButton.classList.remove("embla__button--disabled");
    } else {
      nextButton.classList.add("embla__button--disabled");
    }
  };

  prevButton.addEventListener("click", emblaApi.scrollPrev);
  nextButton.addEventListener("click", emblaApi.scrollNext);

  emblaApi.on("select", setButtonStates);
  emblaApi.on("init", setButtonStates); // Инициализация состояния стрелок
})();

(function () {
  document.querySelectorAll(".promo__cta, .cost__cta").forEach((cta) => {
    cta.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение
      const target = document.querySelector(".contacts");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();


// видео
(function () {
  new VenoBox({
    selector: ".video-preview",
  });
})();




// Карусель видео
(function () {
  var screenWidth = window.innerWidth;
  var slidesToScroll;
  if (screenWidth > 1200) {
    slidesToScroll = 4;
  } else {
    slidesToScroll = "auto";
  }

  const emblaNode = document.querySelector(".new-videos__slider");
  const options = { loop: false, slidesToScroll: slidesToScroll };
  const emblaApi = EmblaCarousel(emblaNode, options);

  const prevButton = document.querySelector(".new-videos__slider .embla__button--prev");
  const nextButton = document.querySelector(".new-videos__slider .embla__button--next");

  const setButtonStates = () => {
    if (emblaApi.canScrollPrev()) {
      prevButton.classList.remove("embla__button--disabled");
    } else {
      prevButton.classList.add("embla__button--disabled");
    }

    if (emblaApi.canScrollNext()) {
      nextButton.classList.remove("embla__button--disabled");
    } else {
      nextButton.classList.add("embla__button--disabled");
    }
  };

  prevButton.addEventListener("click", emblaApi.scrollPrev);
  nextButton.addEventListener("click", emblaApi.scrollNext);

  emblaApi.on("select", setButtonStates);
  emblaApi.on("init", setButtonStates); // Инициализация состояния стрелок
})();