function sumOfNumbers (input) {
    let numberString = String(input[0])
    let sum = 0

    for (let digit of numberString){
        digit = Number(digit)
        sum += digit
    }

    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(['564891'])