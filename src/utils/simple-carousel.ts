import type { slide } from "../types/types";
import { carouselLogic } from "./gsap-plugin";
import { randomizer } from "./randomizer";

export const slides: Record<string, slide> = {
    'HungryDev': {
        alt: "yes",
        img: `https://picsum.photos/seed/${randomizer()}/1280/720`,
        link: "https://picsum.photos/200/200",
        id: 'HungryDev'
    },
    'Mock Terminal': {
        alt: "yes",
        img: `https://picsum.photos/seed/${randomizer()}/1280/720`,
        link: "https://picsum.photos/200/200",
        id: 'MockTerminal'
    },
    'GUI Test': {
        alt: "yes",
        img: `https://picsum.photos/seed/${randomizer()}/1280/720`,
        link: "https://picsum.photos/200/200",
        id: 'GUITest'
    }
}

export function carouselComponents(target: HTMLElement): HTMLElement {
    const left = target.querySelector('#prev-slide');
    const right = target.querySelector('#next-slide');
    const { changecount } = carouselLogic(target);

    left?.addEventListener('click', () => {
        // console.log(timeline)
        changecount(false)
    })
    right?.addEventListener('click', () => {
        console.log('TEST');
        changecount(true)
    })
    return target
}

export function renderCarousel(): HTMLElement {
    const carouselSlide: HTMLElement = document.createElement('div');
    const carouselTrack: HTMLElement = document.createElement('div');
    const img = document.createElement('img');
    carouselSlide.classList.add('carousel-slide');
    carouselTrack.classList.add('carousel-track');

    for (var i of Object.values(slides)) {
        const newImg: HTMLElement = img.cloneNode(true) as HTMLElement;
        const newSlide: HTMLElement = carouselSlide.cloneNode(true) as HTMLElement;
        newImg.setAttribute('src', i.img);
        newSlide.append(newImg);
        carouselTrack.append(newSlide);
    }

    return carouselTrack;
}

