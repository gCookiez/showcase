import { appendHeroContent } from "./hero-content";

const renderItems = [...appendHeroContent()];

export function renderContentBody() : HTMLElement {
    const bodyContent = document.createElement('div');
    bodyContent.setAttribute('id', 'main-body');
    bodyContent.append(...renderItems || null);   
    return bodyContent;
}