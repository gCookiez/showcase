import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const gsapGlobals: any = {}

export function initGSAP(): void {
    gsapGlobals['smoother'] = ScrollSmoother.create({
        wrapper: '#main-scroll-wrapper',
        content: '#main-body',
        smooth: 0.5,
        effects: true,
        smoothTouch: 0.1
    })

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


