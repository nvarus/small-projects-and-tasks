/***************************************************
 * Написать функцию, которая принимает массив чисел,
 * например [1,2,3,4,5] и функция возращает среднее
 * арифметическое, (округлить результат до десятых)
 ***************************************************/

const Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Arr2 = [2.3, 4.6, 7.88, 4.3333];
const Arr3 = [4, 987.90887, 89];

const arithmeticMeanCalc = (array) => {
	let summ = 0;
	for (let item of array) {
		summ += item;
	}
	return (summ / array.length).toFixed(1);
}

const printResult = (array) => {
	console.log("Среднее:", arithmeticMeanCalc(array));
}

printResult(Arr1);
printResult(Arr2);
printResult(Arr3);

