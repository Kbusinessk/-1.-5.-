//Lesson3,4

let userName = prompt('Как вас зовут?')
userName = userName.toUpperCase().trim()

let userAge = prompt('Сколько вам лет?', 100)
userAge = Number(userAge.trim())

alert(`Вас зовут ${userName} \n\
и вам ${userAge} лет`)
