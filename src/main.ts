import { renderContentBody } from "./component/content-body";
import { renderNavBar } from "./component/navbar";
import { getSection, goToSection, gsapGlobals, initGSAP } from "./utils/gsap-plugin";
import './styles/styles.css'



window.addEventListener('DOMContentLoaded', () => {
    initGSAP();
    console.log('LOADED')
    setTimeout(() => {

        if (window.location.hash && gsapGlobals['smoother']) {
            const num: number = getSection(window.location.hash);
            console.log(num)
            if (num !== -1)
                goToSection(num, true);
        }

    }, 490)


});

window.addEventListener('hashchange', (e: any) => {
    setTimeout(() => {
        document.querySelector('.hero-container')?.scrollIntoView({
            block: 'start'
        });
    }, 100)
    
    setTimeout(() => {

        if (window.location.hash && gsapGlobals['smoother']) {
            const num: number = getSection(window.location.hash);
            console.log(num)
            if (num !== -1)
                goToSection(num, true);
        }

    }, 1000)

})





document.querySelector('#app')?.append(renderNavBar(), renderContentBody());