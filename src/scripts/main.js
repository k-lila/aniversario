import { parallax } from "./parallax.js";
import { banner } from "./panel.js";
import { setTogglers } from './togglers.js';

function main() {
    parallax();
    banner();
    setTogglers();
}

document.addEventListener("DOMContentLoaded", () => {
    main();
});
