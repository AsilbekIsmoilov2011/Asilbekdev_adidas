

const navigation = document.querySelector(".header-nav");

navigation.addEventListener('click', () => {
    if (navigation.style.background === 'red') {
        navigation.style.background = 'white'; // 2-marta bosganda oq rang
    } else {
        navigation.style.background = 'red'; // 1-marta bosganda qizil rang
    }
});


document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".header-center__logo");
  const title = document.querySelector(".header-center__title");
  const text = document.querySelector(".header-center__text");

  // 🌀 LOGO: Bosilganda aylanib, kattalashadi
  logo.addEventListener("click", () => {
      logo.style.transition = "transform 0.5s ease";
      logo.style.transform = "rotate(360deg) scale(1.2)"; // Aylanish + kattalashish

      setTimeout(() => {
          logo.style.transform = "rotate(0deg) scale(1)"; // Asl holatga qaytish
      }, 500);
  });

  // 🌈 TITLE: Rang o'zgarishi + Sakrash
  title.addEventListener("click", () => {
      title.style.transition = "color 0.3s ease, transform 0.3s ease";
      title.style.color = "red"; // Rangni o‘zgartirish
      title.style.transform = "translateY(-10px)"; // Biroz yuqoriga sakrash

      setTimeout(() => {
          title.style.color = ""; // Rangni tiklash
          title.style.transform = "translateY(0px)"; // Asl holatga qaytish
      }, 300);
  });

  // 🔽 TEXT: Pastga tushish + Yashirinib chiqish
  text.addEventListener("click", () => {
      text.style.transition = "transform 0.4s ease, opacity 0.4s ease";
      text.style.transform = "translateY(15px)"; // Pastga tushish
      text.style.opacity = "0"; // Yo‘qolish

      setTimeout(() => {
          text.style.transform = "translateY(0px)"; // Yuqoriga qaytish
          text.style.opacity = "1"; // Ko‘rinish
      }, 400);
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".header-center__logo");

    logo.addEventListener("click", () => {
        logo.style.transition = "transform 0.6s ease, filter 0.6s ease";
        logo.style.transform = "rotate(10deg) scale(1.3)"; // Tebranish va kattalashish
        logo.style.filter = "brightness(1.5)"; // Yorqinlikni oshirish

        setTimeout(() => {
            logo.style.transform = "rotate(-10deg) scale(1.3)"; // Qarama-qarshi tomonga tebranadi
        }, 200);

        setTimeout(() => {
            logo.style.transform = "rotate(0deg) scale(1)"; // Asl holatga qaytadi
            logo.style.filter = "brightness(1)"; // Yorqinlik tiklanadi
        }, 600);
    });
});
