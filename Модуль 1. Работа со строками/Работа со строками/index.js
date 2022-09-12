const name1 = 'Karina'
const name2 = 'Igor'
const name3 = `Make`

console.log(name1, name2, name3)

//1. Конкатенация - Объединение нескольких строк в одну
const name = 'Karina'
const profession = 'JavaScript'

//const allInfo = name + ' ' + profession

// const allInfo = `${name} ${profession}` //это более удобный способ Конкатенации строк

let allInfo = name + ' '
allInfo += profession //сокращенная Конкатенация строк
console.log(allInfo)

// 2. length -Получение длины строки
const programingLaunguage = 'JavaScript' //10 нумерация начинается с нуля (0, 1, 2, 3…), а не с единицы

console.log(programingLaunguage.length)
console.log(programingLaunguage[0]) //По индексу 0 находится символ “J”

console.log(programingLaunguage[100]) //undefined

programingLaunguage[0] = 'j' //перезапись строки не произайдет
console.log('programingLaunguage', programingLaunguage) // ничего не изменилось
