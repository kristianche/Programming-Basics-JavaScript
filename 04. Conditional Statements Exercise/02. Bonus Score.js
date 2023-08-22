function bonusScore(input){
    let bonus = 0
    let number = Number(input[0])
    if (number <= 100){
        bonus += 5
    } else if (number > 100 && number <= 1000){
        bonus += 0.20 * number
    } else {
        bonus += 0.10 * number
    }

    if (number % 2 === 0){
        bonus += 1
    }

    if (number % 10 === 5){
        bonus += 2
    }

    console.log(bonus)
    console.log(bonus + number)
}

bonusScore(["20"])