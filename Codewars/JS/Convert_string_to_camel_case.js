/******************************************************************************************
* Завершите метод/функцию так, чтобы она преобразовала слова, разделенные тире/подчеркиванием,
* в camelcasing. Первое слово в выходных данных должно быть заглавным, 
* только если исходное слово было заглавным 
* П Р И М Е Р:
* "the-stealth-warrior" gets converted to "theStealthWarrior"
* "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*******************************************************************************************/

const ENTERING_TEXT1 = "the-stealth-warrior";
const ENTERING_TEXT2 = "The_Stealth_Warriora";

function toCamelCase(text) {

    let newText = '';
    // флаг, означающий что на следующей итерации нужно изменить регистр
    let toUpper = false;

    for (i = 0; i < text.length; i++) {
        if (text[i] != "_" && text[i] != "-") {
            // если найдена буква, проверяем поднят ли флаг toUpper
            if (toUpper) {
                newText += text[i].toUpperCase(); // если true, меняем регист
                toUpper = false;
            } else {
                newText += text[i];         // иначе просто добавляем букву
            }


        } else { toUpper = true } // если обнаружены _ или -
    }

    console.log(newText);
}

toCamelCase(ENTERING_TEXT1);
toCamelCase(ENTERING_TEXT2);
