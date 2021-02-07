let button,exit;

button = document.querySelector("#btn");

button.addEventListener("click", ()=>{
    let html = document.documentElement;
    html.requestFullscreen();
});

exit = document.querySelector("#exit");

exit.addEventListener("click", ()=>{
    document.exitFullscreen();
});

document.addEventListener("fullscreenchange", ()=>{
    exit.classList.toggle("hide");
});