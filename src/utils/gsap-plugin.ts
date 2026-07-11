import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const gsapGlobals: any = {}

let skipScroll = false;
let destination: number | boolean = false;

export function initGSAP(): void {
    scrollSnapper();

    gsapGlobals.vrLine = gsap.timeline({});

    gsapGlobals.vrLine
        .fromTo('.vr-line',
            {
                y: 0,
                background: 'linear-gradient(to bottom, white, #ffffff00 75%)'

            },
            {
                y: 10,
                ease: "sine.out",
                background: 'linear-gradient(to bottom, #ffffff00, white 75%)',
                duration: 1,
                repeat: -1,
                yoyo: true
            },
        )

    gsapGlobals.vrLine
        .fromTo('.scroll-remind',
            {
                y: 0,

            },
            {
                y: 10,
                ease: "sine.out",
                duration: 1,
                repeat: -1,
                yoyo: true
            }, '0'
        )



    return;
}

export function goToSection(i: number, skip?: boolean): void {
    if (gsapGlobals['smoother'] && gsapGlobals['sections']) {

        skip ? (() => {
            skipScroll = true;
            destination = i;
        })() : false;

        gsapGlobals['smoother'].scrollTo(gsapGlobals['sections'][i], {
            smooth: true
        });



    }
}

export function getSection(element: string): number {
    const item = gsapGlobals['sections'].filter((e: any) => e.parentElement.getAttribute('id') === element.replace('#', ''));
    const getEntry = gsapGlobals['sections'].indexOf(item[0])
    return getEntry;
}

export function scrollCheck(i: number, dir: string): void {
    dir === 'down' ? i = i + 1 : false; 

    if (destination !== i && skipScroll) return;
    goToSection(i);
    skipScroll && destination === i ? (() => {
        skipScroll = false;
        destination = false;
    })() : false;
}

export function scrollSnapper(): void {
    gsapGlobals['sections'] = gsap.utils.toArray('.center-content');

    gsapGlobals['smoother'] = ScrollSmoother.create({
        wrapper: '#main-scroll-wrapper',
        content: '#main-body',
        smooth: 0.5,
        effects: true,
        smoothTouch: 0.1
    })



    gsapGlobals['sections'].forEach((i: any, panel: any) => {
        ScrollTrigger.create({
            trigger: i,
            start: "top+=50px top",
            end: "bottom-=50px top",
            onEnter: () => {
                scrollCheck(panel, "down");
            },
            onEnterBack: () => {
                scrollCheck(panel, "up");
            }
        })


    })


    return;
}


