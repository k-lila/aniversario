import { parallax } from "./parallax.js";
import { banner } from "./banner.js";
import { setTogglers } from './togglers.js';
import { ticketHandler } from "./ticket.js";

function main() {
    parallax();
    banner();
    setTogglers();
    ticketHandler();
}

document.addEventListener("DOMContentLoaded", () => {
    main(); 
});
