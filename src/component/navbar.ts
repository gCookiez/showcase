import type { mixedMedia, navItem } from "../types/types";
import { emailValidation, resetEmailValidation } from "../utils/custom-content";
import { gridEffects, gsapGlobals, onLoadShiftingEvents, splitButtonEffects } from "../utils/gsap-plugin";
import { carouselComponents, renderCarousel } from "../utils/simple-carousel";

export const HTMLContent: HTMLElement = document.querySelector('#content')!;

const premod: navItem[] = [
    {
        name: 'about',
        href: 'about',
        display: 'About',
        content: ((): mixedMedia => {

            const main = HTMLContent.querySelector('section.about') as HTMLElement;
            const scrollForMore = HTMLContent.querySelector('section.scroll-for-more') as HTMLElement;
            const aboutDesc = HTMLContent.querySelector('section.about-desc') as HTMLElement;

            return [[main, scrollForMore], [aboutDesc],]
            // return [[main, scrollForMore], [aboutDesc]]
        })()
    },
    {
        name: 'proj',
        href: 'projects',
        display: 'Projects',
        content: ((): mixedMedia => {

            const main = HTMLContent.querySelector('section.projects-section') as HTMLElement;
            const carousel = HTMLContent.querySelector('section.carousel-projects') as HTMLElement;
            carousel.querySelector('.carousel-container .carousel')!.append(renderCarousel())
            carouselComponents(carousel);

            return [[main, carousel]]
        })(),
        extend: true
    },
    {
        name: 'tools',
        href: 'tools',
        display: 'Skills & Tools',
        content: ((): mixedMedia => {
            const canBringContent = HTMLContent.querySelector('section.can-bring-content') as HTMLElement;
            const expGrid = HTMLContent.querySelector('section.experience-grid') as HTMLElement;
            const main = HTMLContent.querySelector('section.full-experience') as HTMLElement;

            gridEffects(expGrid);
            splitButtonEffects(main);

            return [[canBringContent, expGrid], [main]]
        })(),
    },
    {
        name: 'contact',
        href: 'contact',
        display: 'Contact',
        content: ((): mixedMedia => {

            const main = HTMLContent.querySelector('section.contact-section') as HTMLElement;
            const form = HTMLContent.querySelector('section.contact-form') as HTMLElement;


            const email = form.querySelector('#form-email') as HTMLElement;
            email?.addEventListener('invalid', emailValidation);
            email?.addEventListener('input', resetEmailValidation);


            return [[main, form]]
        })()
    },
]


// adds auto height. works only if children are all .center-content
export const navList: navItem[] = premod.map((val: navItem) => {
    if (typeof val.content === 'object' && Object.hasOwn(val.content, 'length')) {
        val.height = String(parseInt(val.content.length as any))
    }
    return val
})

console.log(navList);

export function scroller(event: PointerEvent, item: HTMLElement): void {
    event.preventDefault();

    const target = item.getAttribute('href');
    history.pushState(null, '', target);
    console.log(target);
    if (null !== target) {

        if (gsapGlobals['smoother']) {
            onLoadShiftingEvents(target)
            return;
        }
        //
        document.querySelector(target)!.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    return;
}

export function renderNavItem(item: navItem): HTMLElement {
    const buttonContainer = document.createElement('div')
    const buttonText = document.createElement('h4');
    buttonContainer.classList.add('nav-button');
    buttonContainer.setAttribute('href', `#${item.href}`);
    buttonContainer.addEventListener('click', function (e) {
        scroller(e, this);
    })
    buttonText.innerHTML = item.display;

    buttonContainer.append(buttonText);
    return buttonContainer;
}

export function headerContainer(): HTMLElement {
    const navbar: HTMLElement = document.createElement('div');
    navbar.classList.add('navbar');

    for (var i of navList) {
        const item = renderNavItem(i);
        navbar.append(item);
    }

    return navbar;
}

export function renderNavBar(): HTMLElement {
    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add('nav-bar-padding');
    const navbar: HTMLElement = headerContainer();

    navbarContainer.append(navbar)


    return navbarContainer;
}