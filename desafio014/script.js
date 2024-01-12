let nameArray = []
let gradesArray = []
let index = 0
let c = true
let sum = 0


while (c) {
    let name = prompt("Enter the student's name.")
    nameArray[index] = name
    let grade = prompt("Enter the student's grade.")
    grade = parseFloat(grade)
    gradesArray[index] = grade
        
    let r = prompt("Do you want to add new information? (Y/N)")
        if (r.toUpperCase() !== "Y") {
            c = false
        }

    index++
}

for (let i = 0; i < gradesArray.length; i++) {
    sum += gradesArray[i]
}

let media = sum / nameArray.length
let mediaFix = media.toFixed(1)

console.log(nameArray, gradesArray)
console.log("The sum of the scores were: " + sum)
console.log("The students' overall average is: " + mediaFix)
