/** Завершите решение так, чтобы оно возвращало значение true, если первый аргумент (строка),
 * переданный в функцию, заканчивается вторым аргументом (также строкой). */


function solution(str, ending){
	return (str.slice(-ending.length) === ending);
}

console.log(solution('fails', 'ails'));