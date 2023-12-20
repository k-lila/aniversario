function togglerParallax() {
    const current_state = document.getElementById('toggler-parallax').classList;
    const on = current_state.contains('switch-btn--on');
    if (on) {
        current_state.add('switch-btn--off');
        current_state.remove('switch-btn--on');
    } else {
        current_state.add('switch-btn--on');
        current_state.remove('switch-btn--off');
    }
}

function changeText(text) {
    const top = document.getElementById('text-top');
    const bot = document.getElementById('text-bot');
    if (text == 'regressiva') {
        top.classList.add('card--ofuscate');
        bot.classList.add('card--ofuscate');
        setTimeout(() => {
            top.innerHTML = 'FALTAM...';
            bot.innerHTML = 'PARA O MEU ANIVERSÁRIO!';
            bot.classList.remove('card--ofuscate');
            top.classList.remove('card--ofuscate');
        }, 250)
    }   else if (text == 'progressiva') {
        top.classList.add('card--ofuscate');
        bot.classList.add('card--ofuscate');
        setTimeout(() => {
            document.getElementById('text-top').innerHTML = 'PASSARAM...';
            document.getElementById('text-bot').innerHTML = 'DESDE O MEU ANIVERSÁRIO!';
            bot.classList.remove('card--ofuscate');
            top.classList.remove('card--ofuscate');
        }, 250) 
    }
}

function togglerDate() {
    const current_state = document.getElementById('toggler-date').classList;
    const clock = current_state.contains('switch-btn--reg');
    if (clock) {
        current_state.add('switch-btn--prog');
        current_state.remove('switch-btn--reg');
        changeText('progressiva')
        
        
    } else {
        current_state.add('switch-btn--reg');
        current_state.remove('switch-btn--prog');
        changeText('regressiva')
        
    }
}

export function setTogglers() {
    document.getElementById('text-top').innerHTML = 'FALTAM...';
    document.getElementById('text-bot').innerHTML = 'PARA O MEU ANIVERSÁRIO!';
    document.getElementById('toggler-parallax')
    .addEventListener('click', () => {
        togglerParallax();
    })
    document.getElementById('toggler-date')
    .addEventListener('click', () => {
        togglerDate();
    })
}