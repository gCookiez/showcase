import type { navItem } from "../types/types";
import { aboutTemplate, canBringContent, contactSection, experienceSection, expTemplate, projectsSection} from "./custom-content";


export const navList: navItem[] = [
    {
        name: 'about',
        href: 'about',
        display: 'About',
        content: [aboutTemplate(), expTemplate(), canBringContent()],
        height: '300vh'
    },
    {
        name: 'exp',
        href: 'experience',
        display: 'Experience',
        content: [experienceSection()]
    },
    {
        name: 'proj',
        href: 'projects',
        display: 'Projects',
        content: [projectsSection()]
    },
    {
        name: 'contact',
        href: 'contact',
        display: 'Contact',
        content: [contactSection()]
    },
]

export function renderNavItem(item: navItem): HTMLElement {
    const buttonContainer = document.createElement('div')
    const buttonText = document.createElement('h4');
    buttonContainer.classList.add('nav-button');
    buttonContainer.setAttribute('href', `#${item.href}`);
    buttonContainer.addEventListener('click', () => {
        const targetElement = document.getElementById(item.href);
        history.pushState(null, '', `#${item.href}`);

        targetElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });


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