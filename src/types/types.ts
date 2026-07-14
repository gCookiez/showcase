export type mixedMedia = (HTMLElement[] | string | string[] | DocumentFragment | HTMLElement)[] | string 
export type funMixedMedia = (() => mixedMedia)

type WebAddress = `http://${string}` | `https://${string}` | `./${string}`;

export type navItem = {
    name: string
    href: string
    display: string
    content: mixedMedia | funMixedMedia
    height?: string
    extend?: boolean
}

export const DEFAULT_SETTINGS : navItem = {
    name: '',
    href: '#',
    display: 'Default',
    content: '<h1> No Content Here </h1>',
    extend: false
}

export type slide = {
    alt: string,
    img: WebAddress,
    link: WebAddress,
    id: string,
    pos?: number
    desc?: string
}
