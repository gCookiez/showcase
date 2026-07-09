import type { navItem } from "../types/types";
import { navList } from "./navbar";



export function renderHeroContent(body: navItem) : HTMLElement {
    const heroContainer = document.createElement("div");
    heroContainer.classList.add('hero-container')
    heroContainer.setAttribute('id', body.href);
    heroContainer.style.setProperty('--height', undefined !== body.height ? body.height : '100vh')

    if ('string' === body.content) {
        heroContainer.append(document.createRange().createContextualFragment(body.content));
    }
    else{
        const arrayBody = Array.from(body.content as HTMLElement[])
        heroContainer.append(...arrayBody);
    }
    
    return heroContainer
}

export function appendHeroContent() : HTMLElement[] {
    const bodyItems : HTMLElement[] = [];

    for (var i of navList) {
        bodyItems.push(renderHeroContent(i));
    }

    return bodyItems;
}   