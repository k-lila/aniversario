import { parallax } from "./parallax.js";
import { banner } from "./panel.js";

function main() {
    parallax();
    banner();
}

document.addEventListener("DOMContentLoaded", () => {
    main();
});
