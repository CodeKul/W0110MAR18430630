let nm: string = 'android'
let num: number = 7896
let isActivity: boolean = true
let score = 56.5
let fn: (num1: number, num2: number) => void = (num1: number, num2: number) => {

}

let mixed: (() => void) | number | boolean = 10

let obj: { [key: string]: number | boolean | (() => number) } = {
    error: 10,
    pqr: true,
    cb: () => 789
}

let arr: Array<string> = new Array()

let arNm: number[] = [456, 89, 23]

function calc(): string | number | boolean {
    return `Android`
}

class Order {

}