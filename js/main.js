document.addEventListener("DOMContentLoaded", function () {
  const carData = {
    911: {
      title: "Porsche 911",
      img: "img/911_action.jpg",
      description:
        "The Porsche 911 GT3 RS is the ultimate track-focused version of the legendary 911...",
      video: "https://www.youtube.com/embed/7xf35zoQcC4",
    },
    tacoma: {
      title: "Toyota Tacoma",
      img: "img/tacoma_action.jpg",
      description:
        "The 2024 Toyota Tacoma is a rugged and versatile midsize truck...",
      video: "https://www.youtube.com/embed/2Q3v9kOYew4",
    },
  };

  document.querySelectorAll(".car-card").forEach((card) => {
    card.addEventListener("click", function () {
      const carKey = this.dataset.car;
      document.getElementById("car-title").innerText = carData[carKey].title;
      document.getElementById("car-image").src = carData[carKey].img;
      document.getElementById("car-description").innerText =
        carData[carKey].description;
      document.getElementById("car-video").src = carData[carKey].video;

      document.getElementById("home").classList.add("hidden");
      document.getElementById("car-details").classList.remove("hidden");
    });
  });

  document.getElementById("back-btn").addEventListener("click", function () {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("car-details").classList.add("hidden");
    document.getElementById("car-video").src = "";
  });

  const favorites = [];

  document.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const carKey = this.closest(".car-card").dataset.car;

      if (!favorites.includes(carKey)) {
        favorites.push(carKey);
        this.innerText = "★";
      } else {
        favorites.splice(favorites.indexOf(carKey), 1);
        this.innerText = "☆";
      }

      updateFavoritesList();
    });
  });

  function updateFavoritesList() {
    const favoritesSection = document.getElementById("favorites-list");
    favoritesSection.innerHTML = "";

    favorites.forEach((carKey) => {
      const car = carData[carKey];
      const carItem = document.createElement("div");
      carItem.innerHTML = `<img src="${car.img}" width="100"><p>${car.title}</p>`;
      favoritesSection.appendChild(carItem);
    });
  }

  document.querySelectorAll("nav ul a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const section = this.dataset.section;

      document
        .querySelectorAll("main, section")
        .forEach((sec) => sec.classList.add("hidden"));
      document.getElementById(section).classList.remove("hidden");
    });
  });

  // Theme Toggle
  let themeActive = false;
  document.getElementById("toggle-theme").addEventListener("click", () => {
    const existing = document.getElementById("theme-style");
    if (themeActive && existing) {
      existing.remove();
    } else {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/dark-theme.css";
      link.id = "theme-style";
      document.head.appendChild(link);
    }
    themeActive = !themeActive;
  });
});
