const workSwiper = new Swiper(".work-mySwiper", {
  pagination: {
    el: ".work-swiper-pagination",
  },
  loop: true,
});

const portraitsSwiper = new Swiper(".portraits__mySwiper", {
  pagination: {
    el: ".portraits-swiper-pagination",
  },
  loop: true,
});

const btn = document.querySelector(".mobile");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav ul li a");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("open");

  if (btn.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

links.forEach((el) => {
  el.addEventListener("click", () => {
    btn.classList.remove("open");
    nav.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// =====================

// Получаем элемент
const heroText = document.querySelector(".hero__text");

// Функция для проверки видимости элемента на экране
function checkVisibility() {
  const rect = heroText.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    heroText.classList.add("visible"); // Добавляем класс, когда элемент в области видимости
  }
}

// Проверяем видимость при прокрутке
window.addEventListener("scroll", checkVisibility);

// Проверка сразу при загрузке страницы
checkVisibility();

// =================

AOS.init();
