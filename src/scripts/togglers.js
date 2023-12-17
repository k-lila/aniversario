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

function togglerDate() {
    const current_state = document.getElementById('toggler-date').classList;
    const clock = current_state.contains('switch-btn--reg');
    if (clock) {
        current_state.add('switch-btn--prog');
        current_state.remove('switch-btn--reg');
    } else {
        current_state.add('switch-btn--reg');
        current_state.remove('switch-btn--prog');
    }
}

export function setTogglers() {
    document.getElementById('toggler-parallax')
    .addEventListener('click', () => {
        togglerParallax();
    })
    document.getElementById('toggler-date')
    .addEventListener('click', () => {
        togglerDate();
    })
}