import type { slide } from "../types/types";
import { carouselEffects, carouselLogic } from "./gsap-plugin";
// import { randomizer } from "./randomizer";

export const slides: Record<string, slide> = {
    'Mock Terminal': {
        alt: "MockTerminal",
        img: `./img02.png`,
        link: "https://gcookiez.github.io/main-portfolio/",
        id: 'Mock Terminal',
        desc: "A website that resembles a virtual terminal seen in computers. "
    },
    'HungryDev': {
        alt: "HungryDev",
        img: `./img01.png`,
        link: "https://crispypata.neocities.org/",
        id: 'Hungry Dev Blog',
        desc: 'A personal blog for anything that happens about the dev.'
    },
    'GUI Test': {
        alt: "Gui Test",
        img: `./img03.png`,
        link: "https://crispypata.neocities.org/shrines/GUI/",
        id: 'GUI Test',
        desc: 'A test on imitating windows on web. Elements are web based.'
    }
}

export function carouselComponents(target: HTMLElement): HTMLElement {
    const left = target.querySelector('#prev-slide');
    const right = target.querySelector('#next-slide');
    const { changecount } = carouselLogic(target);
    window.addEventListener('DOMContentLoaded', () => {
        carouselEffects(target);
    })
    

    left?.addEventListener('click', () => {
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
    const carouselDetails: HTMLElement = document.createElement('div');
    const carouselDesc: HTMLElement = document.createElement('h3');
    const img = document.createElement('img');
    carouselSlide.classList.add('carousel-slide');
    carouselTrack.classList.add('carousel-track');
    carouselDetails.classList.add('carousel-item-details');
    carouselDesc.classList.add('carousel-item-desc')

    for (var i of Object.values(slides)) {
        const newImg: HTMLElement = img.cloneNode(true) as HTMLElement;
        const newSlide: HTMLElement = carouselSlide.cloneNode(true) as HTMLElement;
        const newDetails: HTMLElement = carouselDetails.cloneNode(true) as HTMLElement;
        const newDesc: HTMLElement = carouselDesc.cloneNode(true) as HTMLElement;
        newImg.setAttribute('src', i.img);
        if (i.desc) {
            newDesc.innerHTML = `${i.desc}`
        }
        newDetails.innerHTML = `<h1><a class="slide-link" href="${i.link}" target="_blank"> ${i.id} </a></h1>`
        newDetails.append(newDesc)
        newSlide.append(newImg, newDetails);
        carouselTrack.append(newSlide);
    }

    return carouselTrack;
}

