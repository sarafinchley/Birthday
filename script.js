document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";
});

document.getElementById("surprise-button").addEventListener("click", function() {
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("surprise-screen").style.display = "block";
});

document.getElementById("music-toggle").addEventListener("click", function() {
    const music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

// Функция для анимации лепестков
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = Math.random() * 2 + 3 + "s"; 
    document.body.appendChild(petal);

    setTimeout(() => { petal.remove(); }, 5000);
}

setInterval(createPetal, 500);







