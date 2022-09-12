//Lesson1
const myName = 'Karina'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилена Минина'
const reasonText = 'Веб-разработка дает больше свободы и возможностей'
const numberOfMonth = '1'

let myInfoText = `Всем привет! Меня зовут ${myName}.\n\
Сейчас я изучаю язык программирования ${programmingLanguage}\n\
на курсе по ${programmingLanguage} у ${courseCreatorName}. \n\
Я хочу стать веб-разработчиком,\n\
потому что ${reasonText}.\n\
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяц.\n\
Я уверен(а), что пройду данный курс до конца!`
console.log(myInfoText)

//Lesson2
console.log(myInfoText.replaceAll('JavaScript', 'javascript'))
console.log(myInfoText.replaceAll('курс', 'КУРС'))
console.log(myInfoText.length) //305
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]) //В !
