export function divTemplate(content?: (HTMLElement | string | DocumentFragment | HTMLElement[] | DocumentFragment[]), id?: string, classList?: string | string[]): HTMLElement {
    const container = document.createElement('div');

    if (undefined !== id)
        container.setAttribute('id', id || '');


    if (undefined !== classList && 'string' === typeof classList) {
        container.classList.add(classList as string);
    }
    else if (undefined !== classList) {
        container.classList.add(...classList!);
    }


    if (typeof content === 'string') {
        container.append(document.createRange().createContextualFragment(content as string));
    }
    else if (Object.hasOwn(content!, 'length')){
        container.append(...content as HTMLElement[]);
    }
    else {
        container.append(content as HTMLElement);
    }


    return container;
}





