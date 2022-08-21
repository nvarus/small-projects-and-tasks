// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)
const main = () => {
    const firstName = "John";
    const lastName = "Snow";
    const age = 35;

    whoAreYou(firstName, lastName, age);
}

const whoAreYou = (firstName, lastName, age) => {
    console.log("Привет, " + firstName, lastName + ", с возрастом " + age + " лет")
}
main();