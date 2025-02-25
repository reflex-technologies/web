const tabs = document.getElementsByClassName('tab-bar-button');
const mainHeader = document.getElementById('mainHeader');
const tabTitles = ['Home', 'Features', 'Why'];
let timer = null, index = 0;

// Inersection Observer
function initObservers() {
    const whyTiles = document.getElementsByClassName('why-carousel-tile');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            const idleCallback = () => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        timer = setInterval(() => {
                            whyTiles[index].scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
                            index++;
                            index %= whyTiles.length;
                            console.log('next');
                        }, 2000);
                    } else if (timer) {
                        clearInterval(timer);
                        timer = null;
                    }
                })
            };

            if ('requestIdleCallback' in window) {
                window.requestIdleCallback(idleCallback);
            } else {
                idleCallback();
            }
        },
        {
            root: null,
            threshold: 0.5,
        }
    );


    observer.observe(document.getElementsByClassName('why-carousel')[0]);
}


function clickTabbar(target, name, scroll = true) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab-bar-active');
    }

    target.classList.add('tab-bar-active');

    if (scroll)
        document.getElementById(name).scrollIntoView({ behavior: 'smooth', block: 'start' });
}


const contentDiv = document.getElementById('content');
let ticking = false;


document.body.addEventListener('scroll', (event) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            ticking = false;
        });

        const maxY = window.outerHeight;
        const progress = Math.max(0, Math.min(2, Math.floor(3 * document.body.scrollTop / maxY)));

        if (progress > 0) {
            mainHeader.classList.add('header-main-background');
        } else {
            mainHeader.classList.remove('header-main-background');
        }

        clickTabbar(tabs[progress], tabTitles[progress], false);

        ticking = true;
    }

});

window.addEventListener('load', () => {
    initObservers();
});