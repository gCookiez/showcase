import { renderContentBody } from "./component/content-body";
import { renderNavBar } from "./component/navbar";
import { deactivateSkipScroll, gsapGlobals, initGSAP, onLoadShiftingEvents } from "./utils/gsap-plugin";
import './styles/styles.css';
import './styles/slim-form.css';


window.addEventListener('DOMContentLoaded', () => {
    initGSAP();
    console.log('LOADED')
    //delayed to give time on assets loading
    setTimeout(() => {

        if (window.location.hash && gsapGlobals['smoother']) {
            onLoadShiftingEvents(window.location.hash)
        }

    }, 500)

    setTimeout(() => {
        deactivateSkipScroll();
    }, 1000)


});

window.addEventListener('hashchange', () => {
    // fixes scrolling issue due to defaults on hash change
    document.querySelector('.hero-container')?.scrollIntoView({
        block: 'start'
    });


    if (window.location.hash && gsapGlobals['smoother']) {
        onLoadShiftingEvents(window.location.hash);
    }


})


document.querySelector('#app')?.append(renderNavBar(), renderContentBody());
