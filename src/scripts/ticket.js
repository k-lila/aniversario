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

function participate() {
    document.querySelector('.ticket__num').innerHTML = 0;
    const string_data = 'asdasd'
    const panels = document.querySelectorAll('.banner__panel');
    panels.forEach((panel, index) => {
        panel.classList.add('banner--wave');
        panel.addEventListener('animationend', () => {
            panel.classList.remove('banner--wave')
        });
        setTimeout(() => {
            setPanel(string_data, index)
        }, (10 * index) + 250);
    });
}

export function ticketHandler() {
    document.getElementById('ticket-plus')
    .addEventListener('click', sumTicket);
    document.getElementById('ticket-minus')
    .addEventListener('click', minusTicket)
    document.getElementById('participate')
    .addEventListener('click', participate)
}