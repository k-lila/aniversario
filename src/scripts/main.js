function parallax() {
    document.addEventListener('mousemove', (event) => {
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        const xoffset = (event.clientX - middleX) / middleX;
        const yoffset = (event.clientY - middleY) / middleY;
        const xangle = xoffset * 20;
        const yangle = yoffset * 20;
        document.querySelector('.card').style.setProperty('--rotatex', `${yangle * -1}deg`);
        document.querySelector('.card').style.setProperty('--rotatey', `${xangle}deg`);
    })
};

function setPanel(string_data, num) {
    const panels = document.querySelectorAll('.banner__panel');
    if (num == 'initial') {
        panels.forEach(panel => {
            panel.setAttribute('data-content', string_data);
        })
    } else {
        panels[num].setAttribute('data-content', string_data);
    }
};


function changeCounter() {
    const panels = document.querySelectorAll('.banner__panel');
    document.getElementById('counter-btn').addEventListener('click', () => {
        panels.forEach((panel, index) => {
            panel.classList.add('banner--change');
            panel.addEventListener('animationend', () => {
                setPanel('321d : 10h : 34m : 22s', index)
                panel.classList.remove('banner--change');
            });
        });
    })
}



document.addEventListener("DOMContentLoaded", () => {
    parallax();
    const hora = '123d : 23h : 56m : 11s'
    
    setPanel(hora, 'initial')
    changeCounter();
})
