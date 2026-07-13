import { type navItem } from "../types/types";
import { isArrayOfHTML, isArrayOfString } from "../utils/array-checker";
import { divTemplate } from "../utils/custom-content";
import { HTMLContent, navList } from "./navbar";

export function parseHTML(value: string): DocumentFragment {
    return document.createRange().createContextualFragment(value) as DocumentFragment;
}

export function renderHeroContent(body: navItem): HTMLElement {
    const heroContainer = document.createElement("div");
    heroContainer.classList.add('hero-container')
    heroContainer.setAttribute('id', body.href);
    heroContainer.style.setProperty('--height', undefined !== body.height ? body.height : '100vh')

    if ('string' === typeof body.content) {
        heroContainer.append(document.createRange().createContextualFragment(body.content).cloneNode(true));
    }
    else {
        const temp: any[] = [];
        (body.content as any[]).forEach(element => {
            console.log(isArrayOfHTML(element));
            if (isArrayOfHTML(element)) {
                temp.push(divTemplate(element, undefined, undefined == body.extend && !body.extend ? 'center-content' : ['center-content', 'extended'] ))
            }
            else if(element instanceof HTMLElement || element instanceof DocumentFragment) {
                temp.push(element as HTMLElement);
            }
            else if ('string' === typeof element) {
                temp.push(parseHTML(element))
            }
            else if (isArrayOfString(element)) {
                element.forEach((strElem: string) => {
                    temp.push(parseHTML(strElem))
                })
            }

        });

        // const arrayBody = Array.from(body.content as HTMLElement[])
        heroContainer.append(...temp);
    }

    return heroContainer
}

export function appendHeroContent(): HTMLElement[] {
    const bodyItems: HTMLElement[] = [];

    for (var i of navList) {
        bodyItems.push(renderHeroContent(i));
    }

    HTMLContent.remove();

    return bodyItems;
}   