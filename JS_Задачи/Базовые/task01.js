/*********************************** Задача 1 ***************************************/
let task01_inputBox1 = document.getElementById('task01_inputBox1');
let task01_inputBox2 = document.getElementById('task01_inputBox2')
let task01_button1 = document.getElementById('task01_button1');
let task01_outResult1 = document.getElementById('task01_outResult1')

const task01 = () => {
    task01_outResult1.textContent = "Результат: " + (parseInt(task01_inputBox1.value) * parseInt(task01_inputBox2.value))
}
task01_button1.addEventListener('click', task01);

/*********************************** Задача 2 ***************************************/
let task02_inputBox1 = document.getElementById('task02_inputBox1');
let task02_inputBox2 = document.getElementById('task02_inputBox2'); let task02_inputBox3 = document.getElementById('task02_inputBox3');
let task02_button1 = document.getElementById('task02_button1');
let task02_outResult1 = document.getElementById('task02_outResult1')

const task02 = () => {
    task02_outResult1.textContent = "Результат: " + "Привет " + task02_inputBox1.value + " " + task02_inputBox2.value + " c возрастом " + task02_inputBox3.value + " лет"
}
task02_button1.addEventListener('click', task02);

/*********************************** Задача 3 ***************************************/
let task03_inputBox1 = document.getElementById('task03_inputBox1');
let task03_button1 = document.getElementById('task03_button1');
let task03_outResult1 = document.getElementById('task03_outResult1')

const task03 = () => {
    if (task03_inputBox1.value == 'F' || task03_inputBox1.value == 'f') {
        task03_outResult1.textContent = "Результат: " + "Ваш пол женский"
    } else if (task03_inputBox1.value == 'M' || task03_inputBox1.value == 'm') {
        task03_outResult1.textContent = "Результат: " + "Ваш пол мужской"
    } else {
        task03_outResult1.textContent = "Результат: " + "Ваш пол неопределен"
    }
}
task03_button1.addEventListener('click', task03);

/*********************************** Задача 4 ***************************************/
let task04_inputBox1 = document.getElementById('task04_inputBox1');
let task04_button1 = document.getElementById('task04_button1');
let task04_outResult1 = document.getElementById('task04_outResult1')

const task04 = () => {
    switch (task04_inputBox1.value) {
        case '1':
            task04_outResult1.textContent = "Результат: " + "Понедельник"
            break
        case '2':
            task04_outResult1.textContent = "Результат: " + "Вторник"
            break
        case '3':
            task04_outResult1.textContent = "Результат: " + "Среда"
            break
        case '4':
            task04_outResult1.textContent = "Результат: " + "Четверг"
            break
        case '5':
            task04_outResult1.textContent = "Результат: " + "Пятница"
            break
        case '6':
            task04_outResult1.textContent = "Результат: " + "Суббота"
            break
        case '7':
            task04_outResult1.textContent = "Результат: " + "Воскресенье"
            break
        default:
            task04_outResult1.textContent = "Результат: " + "Введено неправильное число"


    }

}
task04_button1.addEventListener('click', task04);