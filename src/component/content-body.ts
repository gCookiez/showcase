import { appendHeroContent } from "./hero-content";

const renderItems = [...appendHeroContent()];

export function renderContentBody() : HTMLElement {
    const bodyContent = document.createElement('div');
    const bodyScrollWrapper = document.createElement('div');
    bodyContent.setAttribute('id', 'main-body');
    bodyScrollWrapper.setAttribute('id', 'main-scroll-wrapper');
    bodyContent.append(...renderItems || null);  
    bodyScrollWrapper.append(bodyContent) 
    return bodyScrollWrapper;
}