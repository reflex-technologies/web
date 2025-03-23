const tabs = document.getElementsByClassName('tab-bar-button');
const mainHeader = document.getElementById('mainHeader');
const sectionElements = [document.getElementById('Home'), document.getElementById('Features'), document.getElementById('Why')];
const tabTitles = ['Home', 'Features', 'Why'];
let timer = null, index = 1;

// Inersection Observer
function initCarouselObserver() {
    const whyTiles = document.getElementsByClassName('why-carousel-tile');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            const idleCallback = () => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        timer = setInterval(() => {
                            whyTiles[index].scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest', left: -100 });
                            document.body.scrollLeft = 0;
                            index++;
                            index %= whyTiles.length;
                        }, 2500);
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


function initTitleObserver() {
    const callback = (entries, observer) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                const index = tabTitles.indexOf(e.target.id);

                // Change active top bar button
                clickTabbar(tabs[index], e.target.id, false);

                // toggle top bar background
                if (index > 0) {
                    mainHeader.classList.add('header-main-background');
                } else {
                    mainHeader.classList.remove('header-main-background');
                }

            }
        });
    };

    const observer = new IntersectionObserver(callback, {
        threshold: [0.25, 0.5, 0.75],
    });

    observer.observe(sectionElements[0]);
    observer.observe(sectionElements[1]);
    observer.observe(sectionElements[2]);
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

/*
document.body.addEventListener('scroll', (event) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            ticking = false;
        });

        const maxY = window.outerHeight;
        const progress = Math.max(0, Math.min(2, Math.floor(3 * document.body.scrollTop / maxY)));

        if (progress > 0) {
            

        clickTabbar(tabs[progress], tabTitles[progress], false);

        ticking = true;
    }

});
*/

window.addEventListener('load', () => {
    initCarouselObserver();
    initTitleObserver();
});