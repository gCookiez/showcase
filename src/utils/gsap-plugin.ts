import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export const gsapGlobals: any = {}

let skipScroll = false;
let destination: number | boolean = false;
let currentView: null | HTMLElement = null;

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
        if (gsapGlobals['sections'].length <= i || i < 0) return

        skip ? (() => {
            skipScroll = true;
            destination = i;
        })() : false;

        gsapGlobals['smoother'].scrollTo(gsapGlobals['sections'][i], {
            smooth: true
        });

    }
}

export function deactivateSkipScroll(): void {
    skipScroll = false;
    return;
}

export function onLoadShiftingEvents(target: string): void {
    const num: number = getSectionByID(target);
    if (num !== -1)
        goToSection(num, true);
}

export function getSectionByID(element: string): number {
    const item = gsapGlobals['sections'].filter((e: any) => e.parentElement.getAttribute('id') === element.replace('#', ''));
    const getEntry = getSectionByEntry(item[0])
    return getEntry;
}

export function getSectionByEntry(element: HTMLElement): number {
    const getEntry = gsapGlobals['sections'].indexOf(element);
    return getEntry
}

export function scrollCheck(i: number, dir: string): void {
    dir === 'down' ? i = i + 1 : false;

    if (destination !== i && skipScroll) return;
    goToSection(i);
    skipScroll && destination === i ? (() => {
        deactivateSkipScroll()
        destination = false;
    })() : false;
}

const entriesObserver = new IntersectionObserver((entries: any): void => {
    entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
            currentView = entry.target;
        }
    })

    return;
}, {
    root: null,
    threshold: 0.1
}
)

export function splitButtonEffects(el: HTMLElement): void {
    gsapGlobals.splitButtonEffect = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scroller: gsapGlobals.smoother,
            start: 'top-=200 bottom',
            end: 'top-=200 center-=320',
            toggleActions: "play resume pause reset"
        }
    })

    gsapGlobals.splitWordsTwo = SplitText.create('.full-experience > * h1', {
        type: 'words'
    })

    gsapGlobals.splitButtonEffect.to(el.querySelectorAll('.category, .skills-buttons > li'),
        {
            onEnter: () => {
                const elements = el.querySelectorAll('.category, .skills-buttons > li');

                elements.forEach((i: Element) => {
                    const e = i as HTMLElement;
                    e.style.transform = "translateY(-200px)"
                    e.style.opacity = "0"
                })
            },
            y: 0,
            opacity: 1,
            stagger: 0.05,
            onanimationend: () => {
                const elements = el.querySelectorAll('.skills-buttons > li');

                elements.forEach((i: Element) => {
                    const e = i as HTMLElement;

                    const anim = gsap.to(e, {
                        scale: 1.5,
                        ease: 'power4.inOut',
                        paused: true,
                        duration: 0.2
                    })

                    e.addEventListener('mouseenter', function () {
                        anim.play()
                    })

                    e.addEventListener('mouseleave', function () {
                        anim.reverse();
                    })
                })
            }
        }
    ).from(gsapGlobals.splitWordsTwo.words, {
        y: -50,
        stagger: 0.05,
        duration: 0.8,
        opacity: 0,
        ease: 'bounce.out'
    }, '0.1')
}

export function gridEffects(el: HTMLElement): void {
    const originalMatrix: number[] =
        [
            1.272, -0.026, -0.02, 0.157, 0, 0
        ]
    const normal: number[] =
        [
            1, 0, 0, 1, 0, 0
        ]

    gsapGlobals.splitWords = SplitText.create('.can-bring-content > * h1', {
        type: 'words'
    })

    gsapGlobals.gridTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scroller: gsapGlobals.smoother,
            start: 'top-=200 bottom',
            end: 'top-=200 center-=320',
            toggleActions: "play resume pause reset"
        }
    })

    gsapGlobals.gridTrigger.to(el.querySelectorAll('.square-grid-padding'), {
        onEnter: () => {
            const elements = el.querySelectorAll<HTMLElement>('.square-grid-padding');
            elements.forEach((i) => {
                i.style.setProperty('--matrix', `matrix(${originalMatrix.join(',')})`);
                i.style.setProperty('opacity', '0');
                i.style.setProperty('transform-origin', '-2px 1px 0px');
            })
        },
        transform: `matrix(${normal.join(',')})`,
        duration: 1,
        stagger: 0.2,
        opacity: 1,
        ease: "expo.inOut",
        onanimationend: () => {
            const elements = el.querySelectorAll('.square-item');

            elements.forEach((i: Element) => {
                const e = i as HTMLElement;

                const anim = gsap.to(e, {
                    scale: 1.2,
                    ease: 'power4.inOut',
                    paused: true,
                    duration: 0.2
                })

                e.addEventListener('mouseenter', function () {
                    anim.play()
                })

                e.addEventListener('mouseleave', function () {
                    anim.reverse();
                })
            })
        }
    }, '0').from(gsapGlobals.splitWords.words, {
        y: -50,
        stagger: 0.05,
        duration: 0.8,
        opacity: 0,
        ease: 'bounce.out'
    }, '0.1')
}

export function carouselEffects(el: HTMLElement): void {
    gsapGlobals.scrollTrigger = ScrollTrigger.create({
        trigger: el,
        scroller: gsapGlobals.smoother,
        start: 'top-=200 bottom+=600',
        end: 'top-=200 center-=320',
        scrub: true,
        onLeave: (self: any) => {
            gsap.set(self.animation.targets(), { clearProps: "transform" });
        },
        toggleActions: "play pause pause reset",
        animation: gsap.fromTo(el.querySelector('.carousel-track'),
            {
                transform: `perspective(200px)
                        rotateX(40deg)
                        translateZ(-500px)
                        translateY(-200px)
                        scale(1)
            `,
            },
            {
                transform: `perspective(0px)
                        rotateX(0deg)
                        translateZ(0px)
                        translateY(0px)
                        scale(1)
            `,
                ease: "power4.inOut",
                duration: 30
            }
        )
    })
}

export function carouselLogic(el: HTMLElement): any {
    // const timeline = gsap.timeline({paused:true})
    const slides = el.querySelectorAll('.carousel-slide')
    const slidesCount = slides.length;

    let counter = 0

    function goToSlide(index: number) {
        gsap.to(el.querySelector('.carousel-track'), {
            xPercent: -100 * index,
            duration: 0.8,
            ease: 'power2.inOut',
            overwrite: "auto"
        })
    }

    function changecount(mode: boolean): void {
        if (!mode) {
            counter = (counter - 1 + slidesCount) % slidesCount;
        }
        else {
            counter = (counter + 1) % slidesCount;
        }

        goToSlide(counter);
    }


    slides.forEach((i) => {
        const item = i.querySelector('.carousel-item-details')
        i.addEventListener('mouseenter', function () {
            gsap.to(item, {
                opacity: 1,
            })
        })
        i.addEventListener('mouseleave', function () {
            gsap.to(item, {
                opacity: 0
            })
        })
    })
    //return counter

    return { changecount };


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


        entriesObserver.observe(i);

    })

    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                goToSection(getSectionByEntry(currentView!) - 1);
                break;
            case 'ArrowDown':
                goToSection(getSectionByEntry(currentView!) + 1);
                break;
            default:
                return;
        }
        e.preventDefault();
    })




    return;
}


