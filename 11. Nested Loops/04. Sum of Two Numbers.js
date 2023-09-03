function sumOfTwoNumbers (input) {
    let startingNumber = Number(input[0])
    let endingNumber = Number(input[1])
    let magicNumber = Number(input[2])
    let combinationsCounter = 0
    let magicNumberFound = false
    let first_number, second_number

    for (let i = startingNumber; i <= endingNumber; i++){
        if (magicNumberFound){
            break
        }
        for (let j = startingNumber; j <= endingNumber; j++){
            combinationsCounter++
            if ((i + j) === magicNumber){
                first_number = i
                second_number = j
                magicNumberFound = true
                break
            }
        }
    }

    if (magicNumberFound){
        console.log(`Combination N:${combinationsCounter} (${first_number} + ${second_number} = ${magicNumber})`)
    } else {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`)
    }
}

sumOfTwoNumbers(["23",
"24",
"20"])

