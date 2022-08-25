// console.log('Hello, world')
const stopWath = () => {
    let startTime = Date.now()

    const getDelay = () => {
        let elapsedTime = Date.now() - startTime
        console.log(elapsedTime)
    }
    return getDelay
}

let timer = stopWath()

// Сделать что-нибудь за некоторое время.
for (let i = 0; i < 1000000; i++) {
    let foo = Math.random() * 10000
}
// Вызвать возвращаемую функцию.
timer()