document.addEventListener("DOMContentLoaded", function() {
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

    // Menu Navigation
    document.querySelectorAll("nav ul a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = this.dataset.section;

            document.querySelectorAll("main, section").forEach(sec => sec.classList.add("hidden"));
            document.getElementById(section).classList.remove("hidden");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Car Data
    const carData = {
        "911": {
            title: "Porsche 911",
            img: "img/911_action.jpg",
            description: "The Porsche 911 GT3 RS is the ultimate track-focused version of the legendary 911. With a 4.0L naturally aspirated flat-six producing 518 horsepower, it delivers razor-sharp handling, aggressive aerodynamics, and a 9,000 RPM redline for an exhilarating driving experience. Built for the racetrack but street-legal, it's a masterpiece of precision engineering.",
            video: "https://www.youtube.com/embed/7xf35zoQcC4"
        },
        "tacoma": {
            title: "Toyota Tacoma",
            img: "img/tacoma_action.jpg",
            description: "The Toyota Tacoma is a rugged and versatile midsize truck, designed for both off-road adventures and everyday driving. With a turbocharged i-FORCE engine, modern tech, and an upgraded suspension system, the new Tacoma offers improved towing capacity, comfort, and legendary Toyota reliability, making it the ultimate do-it-all pickup.",
            video: "https://www.youtube.com/embed/2Q3v9kOYew4"
        }
    };

    // Handle Car Selection
    document.querySelectorAll(".car-card").forEach(card => {
        card.addEventListener("click", function() {
            const carKey = this.dataset.car;
            document.getElementById("car-title").innerText = carData[carKey].title;
            document.getElementById("car-image").src = carData[carKey].img;
            document.getElementById("car-description").innerText = carData[carKey].description;
            document.getElementById("car-video").src = carData[carKey].video; // Set video URL

            document.getElementById("home").classList.add("hidden");
            document.getElementById("car-details").classList.remove("hidden");
        });
    });

    // Back Button
    document.getElementById("back-btn").addEventListener("click", function() {
        document.getElementById("home").classList.remove("hidden");
        document.getElementById("car-details").classList.add("hidden");

        // Stop video playback when going back
        document.getElementById("car-video").src = "";
    });
});
