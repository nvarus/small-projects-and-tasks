const myArray = []
const numberArr = [2, 4, 6, 8, 10]
myArray.push('John')
myArray.push('Marc', 'Faina', 'Sandy')

const modifiedArr = numberArr.map(i => i)

console.log(myArray)
console.log(numberArr)
console.log(modifiedArr)
console.log(numberArr === modifiedArr)