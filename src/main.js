const tabs = document.getElementsByClassName('tab-bar-button');
const tabTitles = ['Home', 'Features', 'Why'];

function clickTabbar(target, name, scroll = true) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab-bar-active');
    }

    target.classList.add('tab-bar-active');

    if (scroll)
        document.getElementById(name).scrollIntoView({ behavior: 'smooth', block: 'center' });
}


const contentDiv = document.getElementById('content');
let ticking = false;


contentDiv.addEventListener('scroll', (event) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {

            ticking = false;
        });

        const rect = contentDiv.getBoundingClientRect();
        const maxY = rect.height - rect.top;
        const progress = Math.max(0, Math.min(2, Math.floor(3 * event.target.scrollTop / maxY)));

        clickTabbar(tabs[progress], tabTitles[progress], false);

        ticking = true;
    }

});