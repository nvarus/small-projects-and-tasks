const main = () => {
    testing("Привет", "привет", true);
    testing("Это абсолютно одинаковые строки", "Это абсолютно одинаковые строки", true);
    testing("написано в разных регистрах", "НАПИСАНО В РАЗНЫХ РЕГИСТРАХ", true);
    testing("Тут у нас совершенно", "разные строки", false);
    testing("В разных регистрах и отличается на одну букву", "в РАЗНЫХ РЕГИСТРАХ И ОТЛИЧАЕТСЯ НА аДНУ БУКВУ", false);
    testing("identical lines in English", "identical lines in English", true);
    testing("identical lines in English", "IDENTICAL LINES IN ENGLISH", true);
    testing("identical lines in English", "IDENTICAL IN ENGLISH", false);
}

const stringComparison = (firstString, secondString) => {
    /*  Функция принимает на вход две строки и сравнивает их, переведя предварительно
        в нижний регистр. Возвращает true, если строки не равны, иначе возвращает false 
    */
    if (firstString.toLowerCase() == secondString.toLowerCase()) {
        return true;
    } else { return false };
}

const testing = (firstString, secondString, expectedResponse) => {
    /*  Тестирующая функция, принимающая две строки и ожидаемый ответ, передает в функцию stringComparison 
        строки и сравнивает возвращенный ответ с ожидаемым
    */
    let returnedValue = stringComparison(firstString, secondString);

    if (returnedValue == expectedResponse) {
        console.log('Тест пройден успешно.' + '|' + '[' + firstString.toLowerCase() + ']', '[' + secondString.toLowerCase() + ']', returnedValue);
    } else { console.error('Тест не пройден' + ' | ' + '[' + firstString.toLowerCase() + ']', '[' + secondString.toLowerCase() + ']', returnedValue) };
}

main();