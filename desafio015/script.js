let carModelArray = []
let carYearArray = []
let carValueArray = []
let index = 0
let repeat = true

while (condition) {
    let model = prompt("What is the car model?")
    carModelArray[index] = model

    let year = prompt("What year is the car?")
    carYearArray[index] = year

    let value = prompt("What is the value of the car?")
    carValueArray[index] = value
    
    let question = prompt("Do you want to enter more data? (Y/N)")
    if (question.toUpperCase() !== "Y") {
        repeat = false
    }
    
    index++
}