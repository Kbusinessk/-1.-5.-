let userString = prompt('Введите текст для обрезки').trim()

let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки').trim()

let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки').trim()

string1 = userString.slice(startSliceIndex, endSliceIndex)
string2 = userString.slice(endSliceIndex)

alert(`Результат: "${string1}”,\n\
где: "${string2}" - итоговая обрезанная строка.`)
