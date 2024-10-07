const objA = {
    chaveA: 'chaveA'
} 
const objB = {
    chaveB: 'chaveB'
}

Object.setPrototypeOf(objA, objB)

export { objA, objB }