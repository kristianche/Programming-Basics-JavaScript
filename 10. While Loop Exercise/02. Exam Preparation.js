function examPreparation (input) {
    let badGrades = Number(input[0])
    let badGradesCount = 0
    let index = 1
    let tooManyBadGrades = false
    let totalGrade = 0
    let gradesCount = 0
    let problemName

    while (true) {
        let lastProblem = problemName
        problemName = String(input[index])

        if (problemName === 'Enough'){
            problemName = lastProblem
            break
        }

        let grade = Number(input[index + 1])

        if (grade <= 4.00){
            badGradesCount++
        }

        if (badGradesCount === badGrades){
            tooManyBadGrades = true
            break
        }

        totalGrade += grade
        gradesCount++
        index += 2
    }

    if (tooManyBadGrades){
        console.log(`You need a break, ${badGrades} poor grades.`)
    } else {
        console.log(`Average score: ${(totalGrade / gradesCount).toFixed(2)}`)
        console.log(`Number of problems: ${gradesCount}`)
        console.log(`Last problem: ${problemName}`)
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

