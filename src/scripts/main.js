import { addParallax } from "./parallax.js";
import { changeCounter, upBanner } from "./panel.js";

document.addEventListener("DOMContentLoaded", () => {
    var typeBanner = 'progressive';
    addParallax(true);    
    upBanner(typeBanner);
    let teste = setInterval(() => {upBanner(typeBanner)}, 1000);
    document.getElementById('counter-btn')
    .addEventListener('click', () => {
        clearInterval(teste);
        if (typeBanner == 'progressive') {
            typeBanner = 'regressive';
        } else {
            typeBanner = 'progressive';
        };
        changeCounter(typeBanner);
        teste = setInterval(() => {
            upBanner(typeBanner);
        }, 1000);
    });
})
