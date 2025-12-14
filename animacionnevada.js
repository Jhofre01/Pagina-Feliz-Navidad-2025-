document.addEventListener("DOMContentLoaded", () => {

    /* ❄ NIEVE */
    const snowSymbols = ["❄", "❅", "❆", "✻", "✼"];
    const snowCount = 80;

    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    for (let i = 0; i < snowCount; i++) {
        const snow = document.createElement("div");
        snow.className = "snowflake";
        snow.innerHTML = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.fontSize = Math.random() * 15 + 10 + "px";
        snow.style.animationDuration = Math.random() * 5 + 5 + "s";
        snow.style.opacity = Math.random();

        snowContainer.appendChild(snow);
    }

    /* ⭐ ESTRELLAS */
    const starCount = 40;

    const starContainer = document.createElement("div");
    starContainer.className = "star-container";
    document.body.appendChild(starContainer);

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.innerHTML = "⭐";

        star.style.left = Math.random() * 100 + "vw";
        star.style.fontSize = Math.random() * 10 + 12 + "px";
        star.style.animationDuration = Math.random() * 6 + 6 + "s";
        star.style.opacity = Math.random();

        starContainer.appendChild(star);
    }
});

/* 🎵 ACTIVAR MÚSICA AL CLICK */
document.addEventListener("click", () => {
    const audio = document.getElementById("musica");
    if (audio && audio.paused) {
        audio.play();
    }
}, { once: true });
