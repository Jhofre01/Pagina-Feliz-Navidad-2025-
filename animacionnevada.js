const symbols = ["❄", "❅", "❆", "✻", "✼"];
const snowCount = 80;

function createSnow() {
    const container = document.createElement("div");
    container.className = "snow-container";
    document.body.appendChild(container);

    for (let i = 0; i < snowCount; i++) {
        const snow = document.createElement("div");
        snow.className = "snowflake";
        snow.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.fontSize = Math.random() * 15 + 10 + "px";
        snow.style.animationDuration = Math.random() * 5 + 5 + "s";
        snow.style.opacity = Math.random();

        container.appendChild(snow);
    }
}

window.onload = createSnow;
