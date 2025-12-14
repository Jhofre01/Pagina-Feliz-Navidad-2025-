const snowSymbols = ["❄", "❅", "❆", "✻", "✼"];
const starSymbols = ["⭐", "🌟", "✨"];

const snowCount = 70;
const starCount = 25;

function createEffects() {
    const container = document.createElement("div");
    container.className = "snow-container";
    document.body.appendChild(container);

    // NIEVE
    for (let i = 0; i < snowCount; i++) {
        const snow = document.createElement("div");
        snow.className = "snowflake";
        snow.innerHTML = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];
        snow.style.left = Math.random() * 100 + "vw";
        snow.style.fontSize = Math.random() * 15 + 10 + "px";
        snow.style.animationDuration = Math.random() * 5 + 5 + "s";
        snow.style.opacity = Math.random();
        container.appendChild(snow);
    }

    // ESTRELLAS
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.innerHTML = starSymbols[Math.floor(Math.random() * starSymbols.length)];
        star.style.left = Math.random() * 100 + "vw";
        star.style.fontSize = Math.random() * 12 + 14 + "px";
        star.style.animationDuration = Math.random() * 6 + 6 + "s";
        star.style.opacity = Math.random();
        container.appendChild(star);
    }
}

window.onload = createEffects;


