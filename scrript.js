let arr_students = [
    {
        id: 1,
        name: "Timur",
        age: 16,
        children: ["Amin","Davlat"],   
        gender: "male"
    },
    {
        id: 2,
        name: "Amin",
        age: 15,
        children: ["Aziz","Zafar","Asad"],
        gender: "female"
    },
    {
        id: 3,
        name: "Naim",
        age: 21,
        children: ["Timur","Orif"],
        gender: "male"
    },
    {
        id: 4,
        name: "Laziz",
        age: 17,
        children: ["Munis"],   
        gender: "female"
    },
    {
        id: 5,
        name: "Jamshed",
        age: 28,
        children: ["Munis"],   
        gender: undefined
    }
]

// Найти средний возраст студентов
// Найти самого старшего студента и сохранить в переменную
// Найти самого младшего студента и сохранить в переменную
// посчитать сколько малчиков и сколько девочек и бинарных




let count = 0

let count2 = 0

let count3 = 0



arr_students.map(item => {
    if(item.gender == "male"){
        count++
    }
})
console.log(count);

arr_students.map(item => {
    if(item.gender == "female"){
        count2++
    }
})
console.log(count2);
arr_students.map(item => {
    if(item.gender == undefined){
        count3++
    }
})
console.log(count3);



let oldest = arr_students.at(-1)

let youngest = arr_students.at(1)

let middleAge = arr_students.reduce((a,b) => a + b.age, 0) / (arr_students.length || 1);



console.log(oldest, youngest, middleAge);



