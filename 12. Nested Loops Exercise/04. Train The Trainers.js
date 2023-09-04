function trainTheTrainers (input) {

    let juryCount = Number(input[0])
    let index = 1
    let command = input[index]
    index++

    let presentationCounter = 0
    let allGradesSum = 0

    while (command !== "Finish") {

        let presentationName = command
        presentationCounter++
        let temporarySumOfGrades = 0

        for(let i = 0; i < juryCount; i++) {

            let grade = Number(input[index])
            index++;
            temporarySumOfGrades += grade

        }

        let temporaryAverageGrade = temporarySumOfGrades / juryCount
        allGradesSum += temporaryAverageGrade
        console.log(`${presentationName} - ${temporaryAverageGrade.toFixed(2)}.`)
        command = input[index]
        index++

    }
    let aveGradeAllPresent = allGradesSum / presentationCounter
    console.log(`Student's final assessment is ${(aveGradeAllPresent).toFixed(2)}.`)

}
trainTheTrainers([
        "2",
        "While-Loop",
        "6.00",
        "5.50",
        "For-Loop",
        "5.84",
        "5.66",
        "Finish"
    ])