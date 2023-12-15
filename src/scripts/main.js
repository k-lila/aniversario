function parallax() {
    document.addEventListener('mousemove', (event) => {
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        const xoffset = (event.clientX - middleX) / middleX;
        const yoffset = (event.clientY - middleY) / middleY;
        const xangle = xoffset * 120;
        const yangle = yoffset * 45;
        document.querySelector('.card').style.setProperty('--rotatex', `${yangle * -1}deg`);
        document.querySelector('.card').style.setProperty('--rotatey', `${xangle}deg`);
        // for (let i=0; i<100; i++) {
        //     setPanel(`x:${Math.floor(xangle)}|y:${Math.floor(yangle)}`, i)
        // }
    })
};

function parallaxMobile() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event)=> {
            const devicex = event.beta - 40;
            const devicey = event.gamma;
            document.querySelector('.card').style.setProperty('--rotatex', `${devicex * -1}deg`);
            document.querySelector('.card').style.setProperty('--rotatey', `${devicey}deg`);
            // for (let i=0; i<100; i++) {
            //     setPanel(`x:${Math.round(devicex)}|y:${Math.round(devicey)}`, i)
            // }
        }, true)
    }
}

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
        document.getElementById('banner').style.animation = ('rotatePanel 2s forwards')
        panels.forEach((panel, index) => {
            // panel.style.animation = 'rotatePanel 2s forwards'

            setPanel('321d : 10h : 34m : 22s', index);

            
            // animation: rotatePanel 2s forwards

            // panel.classList.add('banner--change');
            // panel.addEventListener('animationend', () => {
            //     panel.classList.remove('banner--change');
            // });

        });

    })

}

document.addEventListener("DOMContentLoaded", () => {
    parallax();
    parallaxMobile();
    // changeCounter();
})
