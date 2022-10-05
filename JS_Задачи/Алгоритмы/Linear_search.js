const array = [1, 4, 7, 3, 8, 9, 9, 4, 8, 0, 6];

let count = 0;

function linearSearch(array, item) {
    for (let i of array) {
        console.log(array[i]);
    }
}


console.log(linearSearch(array, 1));
console.log('count = ', count);
console.log(array);
