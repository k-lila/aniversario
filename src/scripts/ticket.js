import { setPanel } from './banner.js';

function sumTicket() {
    const num = Number(document.querySelector('.ticket__num').innerHTML);
    document.querySelector('.ticket__num').innerHTML = num + 1;
};

function minusTicket() {
    const num = Number(document.querySelector('.ticket__num').innerHTML);
    if (num  !== 0) {
        document.querySelector('.ticket__num').innerHTML = num - 1;
    }
};

export function ticketHandler() {
    document.getElementById('ticket-plus')
    .addEventListener('click', sumTicket);
    document.getElementById('ticket-minus')
    .addEventListener('click', minusTicket)
}