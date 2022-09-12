let userText = prompt('Введите текст', 'текст').trim()

let wordFromText = prompt('Введите слово из текста').trim()

let indexOfWord = userText.indexOf(wordFromText)

alert(`Результат: "${wordFromText}”,\n\
где: "${userText.slice(indexOfWord)}" - итоговая обрезанная строка.`)
