function parallaxMouse(event) {
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    const xoffset = (event.clientX - middleX) / middleX;
    const yoffset = (event.clientY - middleY) / middleY;
    const xangle = (xoffset * 15).toFixed(2);
    const yangle = (yoffset * 15).toFixed(2);
    document.querySelector('.card').style.setProperty('--rotatex', `${yangle * -1}deg`);
    document.querySelector('.card').style.setProperty('--rotatey', `${xangle}deg`);
}

function parallaxMobile(event) {
    const devicex = ((event.beta - 30) * 0.8).toFixed(2);
    const devicey = (event.gamma * 0.8).toFixed(2);
    document.querySelector('.card').style.setProperty('--rotatex', `${devicex * -1}deg`);
    document.querySelector('.card').style.setProperty('--rotatey', `${devicey}deg`);
}

function toggleParallax(toggler) {
    if (toggler) {
        document.addEventListener('mousemove', parallaxMouse);
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', parallaxMobile);
        }
    } else {
        document.removeEventListener('mousemove', parallaxMouse);
        if (window.DeviceOrientationEvent) {
            window.removeEventListener('deviceorientation', parallaxMobile)
        }
        document.querySelector('.card').style.setProperty('--rotatex', '0deg');
        document.querySelector('.card').style.setProperty('--rotatey', '0deg');
    }
}

export function parallax() {
    var parallax = true;
    toggleParallax(parallax);
    document.getElementById('toggler-parallax')
    .addEventListener('click', () => {
        parallax = !parallax;
        toggleParallax(parallax);
    });
}