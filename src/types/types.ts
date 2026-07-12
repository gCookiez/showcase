export type mixedMedia = (HTMLElement[] | string | string[] | DocumentFragment | HTMLElement)[] | string 
export type funMixedMedia = (() => mixedMedia)

export type navItem = {
    name: string
    href: string
    display: string
    content: mixedMedia | funMixedMedia
    height?: string
}