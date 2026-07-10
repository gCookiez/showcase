import { renderContentBody } from "./component/content-body";
import { renderNavBar } from "./component/navbar";
import { initGSAP } from "./utils/gsap-plugin";
import './styles/styles.css'



window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            window.scrollTo(0, 0);

            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    initGSAP();
});



document.querySelector('#app')?.append(renderNavBar(), renderContentBody());