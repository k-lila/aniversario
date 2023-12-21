export function setPanel(string_data, num) {
    const panels = document.querySelectorAll('.banner__panel');
    panels[num].querySelector('span').innerHTML = string_data;
};

function getData() {
    const dataAtual = new Date();
    const year = dataAtual.getFullYear();
    var aniversario = new Date(year, 4, 23, 13, 45);
    var lastNiver = null;
    var string_data = '';
    if (dataAtual > aniversario) {
        lastNiver = new Date(aniversario);
        aniversario.setFullYear(dataAtual.getFullYear() + 1);
    }
    return [dataAtual, aniversario, lastNiver]
};

function getStringBanner(typeBanner) {
    const datas = getData();
    const secMs = 1000;
    const minMs = secMs * 60;
    const horMs = minMs * 60;
    const diasMs = horMs * 24;
    var milisec = null;
    if (typeBanner == 'regressive') {
        milisec = datas[1] - datas[0];
    } else if (typeBanner == 'progressive') {
        milisec = datas[0] - datas[2];
    }
    const diasAte = Math.floor(milisec / diasMs);
    const horasAte = Math.floor((milisec % diasMs) / horMs);
    const minAte = Math.floor((milisec % horMs) / minMs);
    const secAte = Math.floor((milisec % minMs) / secMs);
    const dias= `${diasAte}`.padStart(3, '0') + 'd';
    const horas= `${horasAte}`.padStart(2, '0') + 'h';
    const minutos= `${minAte}`.padStart(2, '0') + 'm';
    const segundos= `${secAte}`.padStart(2, '0') + 's';
    return `${dias} : ${horas} : ${minutos} : ${segundos}`
};

function upBanner(typeBanner) {
    const show = getStringBanner(typeBanner);
    for (let i=0; i<100; i++) {
        setPanel(show, i);
    };
};

function changeCounter(typeBanner) {
    const panels = document.querySelectorAll('.banner__panel');
    const string_data = getStringBanner(typeBanner);
    const animations = ['banner--rotateX', 'banner--rotateY', 'banner--rotateZ']
    const randomIndex = Math.floor(Math.random() * 3);
    panels.forEach((panel, index) => {
        panel.classList.add(animations[randomIndex]);
        setTimeout(() => {
            setPanel(string_data, index)
        }, (10 * index) + 250);
        panel.addEventListener('animationend', () => {
            panel.classList.remove(animations[randomIndex]);
        });    
    });
};

function participate() {
    const ingressos = Number(document.querySelector('.ticket__num').innerHTML) 
    if (ingressos >= 1) {
        var string_data = null;
        if (ingressos == 1) {
            string_data = `${ingressos} reserva, te vejo lá! ;)`
        } else {
            string_data = `${ingressos} reservas, até lá! ;)`
        }
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
};

function everySecond(typeBanner) {
    return setInterval(() => {
        upBanner(typeBanner);
    }, 1000);
};

export function banner() {
    var typeBanner = 'regressive';
    upBanner(typeBanner);
    var todoSegundo = everySecond(typeBanner)
    document.getElementById('toggler-date')
    .addEventListener('click', () => {
        clearInterval(todoSegundo);
        if (typeBanner == 'progressive') {
            typeBanner = 'regressive';
        } else {
            typeBanner = 'progressive';
        };
        changeCounter(typeBanner);
        todoSegundo = everySecond(typeBanner)
    });
    document.getElementById('participate')
    .addEventListener('click', () => {
        const ingressos = Number(document.querySelector('.ticket__num').innerHTML);
        if (ingressos > 0) {
            clearInterval(todoSegundo);
            participate();
            document.querySelector('.card').classList.remove('card--parallax');
            setTimeout(() => {
                return location.reload()
            }, 4000);
        }
    })
};