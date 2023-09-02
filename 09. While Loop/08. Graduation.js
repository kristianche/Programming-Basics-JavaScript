function graduation (input) {
    let schoolClass = 1
    let name = String(input[0])
    let failedClasses = 0
    let graduationGrade = 0
    let failed = false

    while (true){
        if (schoolClass > 12){
            break
        }

        let grade = Number(input[schoolClass])

        if (grade < 4.00){
            failedClasses++
        }

        if (failedClasses === 2){
            console.log(`${name} has been excluded at ${schoolClass - 1} grade`)
            failed = true
            break
        }

        graduationGrade += grade
        schoolClass++
    }

    if (!failed){
        console.log(`${name} graduated. Average grade: ${(graduationGrade / 12).toFixed(2)}`)
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
