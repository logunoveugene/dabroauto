var header = `   <div class="header">
      <div class="header__container">
        <div class="header__logo-nav">
          <a href="/">
            <img
              class="header__logo"
              src="./assets/images/logo.svg"
              alt="DabroAUTO"
          /></a>
 
          <nav class="header__nav">
            <a class="header__link" href="/category.html">Авто из Японии</a>
            <a class="header__link" href="/category.html">Авто из Китая</a>
            <a class="header__link" href="/category.html">Авто из Кореи</a>
            <a class="header__link" href="#">Аукционы</a>
            <a class="header__link" href="/contacts.html">Контакты</a>
          </nav>
        </div>
        <div class="header__contacts">
          <div class="socials">
            <a class="social__item" href="#">
              <img
                class="social__item-icon"
                src="./assets/images/social/tg.svg"
                alt="Telegram"
              />
            </a>
            <a class="social__item" href="#">
              <img
                class="social__item-icon"
                src="./assets/images/social/whatsapp.svg"
                alt="WhatsApp"
              />
            </a>
            <a class="social__item" href="#">
              <img
                class="social__item-icon"
                src="./assets/images/social/youtube.svg"
                alt="VK"
              />
            </a>
            <a class="social__item" href="#">
              <img
                class="social__item-icon"
                src="./assets/images/social/vk.svg"
                alt="ВКонтакте"
              />
            </a>
            <a class="social__item" href="#">
              <img
                class="social__item-icon"
                src="./assets/images/social/inst.svg"
                alt="Instagram"
              />
            </a>
          </div>
          <div class="header__phone">
            <a class="header__phone-number" href="tel:+71234567890"
              >+7 123 456 78 90</a
            >
            <a class="header__phone-whatsapp" href="#">Написать в WhatsApp</a>
          </div>
                   <button class="header__hamburger" aria-label="Toggle menu">
            <img
              class="header__hamburger--menu"
              src="./assets/images/burger.svg"
              alt=""
            />
            <img
              class="header__hamburger--close"
              src="./assets/images/close.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>`;

document.querySelector("#header").innerHTML = header;

document
  .querySelector(".header__hamburger")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header__nav").classList.toggle("active");
  });
