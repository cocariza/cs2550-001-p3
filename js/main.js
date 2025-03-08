// Open and Close Sidebar Menu
document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("active");
});

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("active");
});

// Car Data
const carData = {
    "911": {
        title: "Porsche 911",
        img: "img/911.jpg",
        description: "An iconic German sports car with heritage."
    },
    "tacoma": {
        title: "Toyota Tacoma",
        img: "img/tacoma.jpg",
        description: "The do-it-all truck with off-road capabilities."
    }
};

// Handle Car Selection
document.querySelectorAll(".car-card").forEach(card => {
    card.addEventListener("click", function() {
        const carKey = this.dataset.car;
        document.getElementById("car-title").innerText = carData[carKey].title;
        document.getElementById("car-image").src = carData[carKey].img;
        document.getElementById("car-image").style.width = "100%"; 
        document.getElementById("car-image").style.height = "300px"; 
        document.getElementById("car-image").style.objectFit = "cover"; 
        document.getElementById("car-description").innerText = carData[carKey].description;

        document.getElementById("home").classList.add("hidden");
        document.getElementById("car-details").classList.remove("hidden");
    });
});

// Back Button
document.getElementById("back-btn").addEventListener("click", function() {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("car-details").classList.add("hidden");
});

// Handle Favorites
const favorites = [];

document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents opening car details

        const carKey = this.closest(".car-card").dataset.car;

        if (!favorites.includes(carKey)) {
            favorites.push(carKey);
            this.innerText = "★"; // Mark as favorite
        } else {
            favorites.splice(favorites.indexOf(carKey), 1);
            this.innerText = "⭐"; // Unmark
        }

        updateFavoritesList();
    });
});

// Update Favorites List
function updateFavoritesList() {
    const favoritesSection = document.getElementById("favorites-list");
    favoritesSection.innerHTML = "";

    favorites.forEach(carKey => {
        const car = carData[carKey];
        const carItem = document.createElement("div");
        carItem.classList.add("favorite-item");
        carItem.innerHTML = `
            <img src="${car.img}" alt="${car.title}" width="100">
            <p>${car.title}</p>
        `;
        favoritesSection.appendChild(carItem);
    });
}


// Navigate Home by Clicking Title
document.getElementById("home-title").addEventListener("click", function() {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("car-details").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
});

// Menu Navigation
document.querySelectorAll("nav ul a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const section = this.dataset.section;

        document.querySelectorAll("main, section").forEach(sec => sec.classList.add("hidden"));
        document.getElementById(section).classList.remove("hidden");

        // Close menu on click
        document.getElementById("sidebar").classList.remove("active");
    });
});