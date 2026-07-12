import type { navItem } from "../types/types";
import { isArrayOfHTML } from "../utils/array-checker";
import { divTemplate } from "../utils/custom-content";
import { HTMLContent, navList } from "./navbar";

export function renderHeroContent(body: navItem) : HTMLElement {
    const heroContainer = document.createElement("div");
    heroContainer.classList.add('hero-container')
    heroContainer.setAttribute('id', body.href);
    heroContainer.style.setProperty('--height', undefined !== body.height ? body.height : '100vh')

    if ('string' === body.content) {
        heroContainer.append(document.createRange().createContextualFragment(body.content));
    }
    else{
        const temp : any[] = [];
        (body.content as any[]).forEach(element => {
            console.log(isArrayOfHTML(element));
            if(isArrayOfHTML(element)){
                temp.push(divTemplate(element, undefined, 'center-content'))
            }
            else {
                temp.push(element as HTMLElement);
            }
        });
        
        // const arrayBody = Array.from(body.content as HTMLElement[])
        heroContainer.append(...temp);
    }
    
    return heroContainer
}

export function appendHeroContent() : HTMLElement[] {
    const bodyItems : HTMLElement[] = [];

    for (var i of navList) {
        bodyItems.push(renderHeroContent(i));
    }

    HTMLContent.remove();

    return bodyItems;
}   