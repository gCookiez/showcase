export function isArrayOfArrays(value: unknown): value is HTMLElement[][] {
    console.log(value);
    if (!Array.isArray(value)) {
        return false;
    }

    return value.every(item => 
        Array.isArray(item) && 
        item.every(element => element instanceof HTMLElement)
    );
}

export function isArrayOfHTML(value: unknown) : value is HTMLElement[] {

    
    return Array.isArray(value) && 
        value.every(element => element instanceof HTMLElement)
}

export function isArrayOfString(value: unknown) : value is string[] {

    return Array.isArray(value) && 
        value.every(element => typeof element == "string")
}

