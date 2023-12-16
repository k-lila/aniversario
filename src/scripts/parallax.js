function parallaxMouse() {
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

function parallaxMobile() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event)=> {
            const devicex = event.beta - 40;
            const devicey = event.gamma;
            document.querySelector('.card').style.setProperty('--rotatex', `${devicex * -1}deg`);
            document.querySelector('.card').style.setProperty('--rotatey', `${devicey}deg`);
        }, true)
    }
};

export function addParallax(onOff) {
    if (onOff) {
        parallaxMouse();
        parallaxMobile();
    }
}