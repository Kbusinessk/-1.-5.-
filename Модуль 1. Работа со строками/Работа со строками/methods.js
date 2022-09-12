//1. toUpperCase(), toLowerCase()

const animal = 'Lion'
console.log('upper', animal.toUpperCase()) //LION
console.log('lower', animal.toLowerCase()) //lion

console.log('animal', animal) //toUpperCase(), toLowerCase() не изменяет переменную 'animal'

//2. Поиск символов в строке - indexOf(),  includes()
const text = 'JavaScript'
console.log('indexOf', text.indexOf('Script')) //4
console.log('indexOf', text.indexOf('1234')) // '-1' это означает что такой строчки небыло найдено

console.log('indexOf', text.indexOf('a')) //1, он находит только первый элемент и не берет в учет другие буквы
console.log('includes', text.includes('Java')) // true
console.log('includes', text.includes('555')) //false

//3. Обрезка строки - slice()  substring()
// Оба метода принимают в себя два параметра:
// Индекс символа, с которого нужно начать извлечение
// Индекс символа, до которого нужно закончить извлечени

const string1 = 'Hello World! It is JavaScript coding'
console.log(string1.slice(6, 11))
console.log(string1.slice(6))
console.log(string1.substring(6, 11))
//Обрезку строки  можно взять на выбор но предпочтительней для меня обрезка slice

//4. Замена символов в строке - replace(), replaceAll()
// Он принимает в себя два параметра:
// Строку, которую нужно удалить
// Строку, на которую нужно заменить удаленное значение

const string = 'JavaScript'
console.log(string.replace('a', 'A')) //JAvaScript
console.log(string.replaceAll('a', 'A')) //JAvAScript
console.log(string.replace('Script', '')) //1. это страка которую мы хотим удалить и 2. это страка которую мы хотим заменить
console.log(string.replace('Java', '123'))

//5. Повторение строки несколько раз - repeat()
const stringText = 'Hello!'
console.log(stringText.repeat(3)) //Hello!Hello!Hello!

//6. Удаление лишних пробелов - trim()
const nameOfUser = prompt('What is your name?')
console.log('nameOfUser', nameOfUser.trim())

const ontext = 'NodeJS and JavaScript'
text[0] = 'n'
console.log(ontext)
