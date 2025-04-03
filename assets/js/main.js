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

AOS.init();
