function setPanel(string_data, num) {
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
        aniversario.setFullYear(dataAtual.getFullYear() + 1)
    }
    return [dataAtual, aniversario, lastNiver]
}

function setBanner(typeBanner) {
    const datas = getData();
    const secMs = 1000;
    const minMs = secMs * 60;
    const horMs = minMs * 60;
    const diasMs = horMs * 24;
    var milisec = null;
    if (typeBanner == 'regressive') {
        milisec = datas[1] - datas[0];
    } else if (typeBanner == 'progressive') {
        milisec = datas[0] - datas[2]
    }
    const diasAte = Math.floor(milisec / diasMs);
    const horasAte = Math.floor((milisec % diasMs) / horMs);
    const minAte = Math.floor((milisec % horMs) / minMs);
    const secAte = Math.floor((milisec % minMs) / secMs);
    const string_data = `${diasAte}d : ${horasAte}h : ${minAte}m : ${secAte}s`
    return string_data
}

export function upBanner(typeBanner) {
    const shows = setBanner(typeBanner);
    for (let i=0; i<100; i++) {
        setPanel(shows, i);
    };
}

export function changeCounter(typeBanner) {
    const panels = document.querySelectorAll('.banner__panel');
    const string_data = setBanner(typeBanner);
    panels.forEach((panel, index) => {
        panel.classList.add('banner--rotate');
        setTimeout(() => {
            setPanel(string_data, index)
        }, (10 * index) + 250);
        panel.addEventListener('animationend', () => {
            panel.classList.remove('banner--rotate');
        });    
    });
};