/*********************************************************************
 * Учитывая последовательность слов, вам нужно найти слово, набравшее 
 * наибольшее количество баллов. Каждая буква слова набирает очки в 
 * соответствии с ее положением в алфавите: a = 1, b = 2, c = 3 и т.д.
 * Вам нужно вернуть слово с наивысшим баллом в виде строки.
 * Если два слова набирают одинаковый балл, верните слово, которое 
 * появляется раньше всего в исходной строке.
 * Все буквы будут строчными, и все входные данные будут действительными. */
const main = () => {
   high("man i need a taxi up to ubud", 'taxi')
   high("what time are we climbing up the volcano", 'volcano')
   high("take me to semynak", 'semynak')
   high('aa b', 'aa')
   high('b aa', 'b')
   high('d bb', 'd')
   high('aaa b', 'aaa')
}

main();

const high = (x) => {

}

const testing = (string, aswer) => {

}