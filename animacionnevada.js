document.addEventListener("DOMContentLoaded", () => {

    /* ❄ CONTENEDOR NIEVE */
    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    const snowSymbols = ["❄", "❅", "❆"];
    const snowCount = 70;

    for (let i = 0; i < snowCount; i++) {
        const snow = document.createElement("div");
        snow.className = "snowflake";
        snow.textContent = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.fontSize = Math.random() * 16 + 10 + "px";
        snow.style.animationDuration = Math.random() * 5 + 6 + "s";
        snow.style.animationDelay = Math.random() * 5 + "s";

        snowContainer.appendChild(snow);
    }

    /* ⭐ CONTENEDOR ESTRELLAS */
    const starContainer = document.createElement("div");
    starContainer.className = "star-container";
    document.body.appendChild(starContainer);

    const starCount = 35;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.textContent = "⭐";

        star.style.left = Math.random() * 100 + "vw";
        star.style.fontSize = Math.random() * 12 + 12 + "px";
        star.style.animationDuration = Math.random() * 6 + 8 + "s";
        star.style.animationDelay = Math.random() * 6 + "s";

        starContainer.appendChild(star);
    }
});

/* 🎵 ACTIVAR MÚSICA */
document.addEventListener("click", () => {
    const audio = document.getElementById("musica");
    if (audio && audio.paused) audio.play();
}, { once: true });


