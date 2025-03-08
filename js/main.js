document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("hidden");
});

// Car Data
const carData = {
    supra: {
        title: "Toyota Supra",
        img: "img/supra.jpg",
        description: "A legendary JDM car with high performance."
    },
    "911": {
        title: "Porsche 911",
        img: "img/911.jpg",
        description: "An iconic German sports car with heritage."
    }
};

// Handle Car Selection
document.querySelectorAll(".car-card").forEach(card => {
    card.addEventListener("click", function() {
        const carKey = this.dataset.car;
        document.getElementById("car-title").innerText = carData[carKey].title;
        document.getElementById("car-image").src = carData[carKey].img;
        document.getElementById("car-image").style.width = "100%"; // Ensures consistency
        document.getElementById("car-image").style.height = "300px"; // Matches other images
        document.getElementById("car-image").style.objectFit = "cover"; // Prevents distortion
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

// Favorite Button Functionality
document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents clicking on card from triggering details
        this.classList.toggle("favorited");
        if (this.classList.contains("favorited")) {
            this.innerText = "★"; // Filled Star
        } else {
            this.innerText = "⭐"; // Empty Star
        }
    });
});

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
    });
});
