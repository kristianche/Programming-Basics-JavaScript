function numbersDivisibleBy9 (input) {
    let startingNumber = Number(input[0])
    let endingNumber = Number(input[1])
    let sum = 0
    let numbers = []

    for (let i = startingNumber; i <= endingNumber; i++){
        if (i % 9 === 0){
            sum += i
            numbers.push(i)
        }
    }

    console.log(`The sum: ${sum}`)
    for (let digit of numbers){
        console.log(digit)
    }
}

numbersDivisibleBy9(['100', '200'])