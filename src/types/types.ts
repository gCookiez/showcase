export type navItem = {
    name: string
    href: string
    display: string
    content: (HTMLElement[] | string | DocumentFragment | HTMLElement)[] | string | (() => (HTMLElement[] | string | DocumentFragment | HTMLElement)[] | string )
    height?: string
}