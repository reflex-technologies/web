function clickTabbar(event, name) {
    const buttons = document.getElementsByClassName("tab-bar-active");

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('tab-bar-active');
    }

    event.target.classList.add('tab-bar-active');
}