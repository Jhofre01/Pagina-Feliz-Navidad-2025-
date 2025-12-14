const symbols = ["❄", "❅", "❆", "✻", "✼"];
const snowCount = 120;

function createSnow() {
    const container = document.createElement("div");
    container.className = "snow-container";
    document.body.appendChild(container);

    for (let i = 0; i < snowCount; i++) {
        const snow = document.createElement("div");
        snow.className = "snowflake";
        snow.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.fontSize = Math.random() * 18 + 12 + "px";
        snow.style.animationDuration = Math.random() * 6 + 6 + "s";
        snow.style.animationDelay = Math.random() * 5 + "s";
        snow.style.opacity = Math.random();

        container.appendChild(snow);
    }
}

window.addEventListener("load", createSnow);

