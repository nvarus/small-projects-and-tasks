// Написать функцию, которая принимает два числа
// и возращает результат их умножения
let inputBox1 = document.querySelector('.inputBox1');
let inputBox2 = document.getElementById('secondNumber')
let button = document.querySelector('.button');
let outResult = document.getElementById('outResult')

const click1 = () => {
    outResult.textContent = outResult.textContent + "   " + (parseInt(inputBox1.value) * parseInt(inputBox2.value))
}

button.addEventListener('click', click1);