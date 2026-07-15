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
    else if (Object.hasOwn(content!, 'length')) {
        container.append(...content as HTMLElement[]);
    }
    else {
        container.append(content as HTMLElement);
    }


    return container;
}

// export function emailValidation(event: SubmitEvent): void {
//     // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     // event.preventDefault();
//     console.log(event);
//     console.log(this);
//     return;
// }


export function emailValidation(event: any) {
    const target = event.target;

    if (target.validity.valueMissing) {
        target.setCustomValidity('Oops! The email field cannot be left blank.');
    } else if (target.validity.typeMismatch) {
        target.setCustomValidity('Please provide a valid email format (e.g., name@example.com).');
    }
}

export function resetEmailValidation(event: any) {
    event.target.setCustomValidity('');
}





