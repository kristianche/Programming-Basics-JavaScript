function sumPrimeNonPrime (input) {

    let index = 0
    let command = input[index]
    index++

    let sumPrimeNumbers = 0
    let sumNonPrimeNumbers = 0

    while (command !== "stop") {
        let currentNum = Number(command)

        if (currentNum < 0) {
            console.log(`Number is negative.`)
            command = input[index]
            index++
            continue
        }

        isPrime = true

        for (let divider = 2; divider < currentNum; divider++) {

            if (currentNum % divider === 0) {
                isPrime = false
                break
            }
        }

        if (isPrime === true) {
            sumPrimeNumbers += currentNum
        } else {
            sumNonPrimeNumbers += currentNum
        }

        command = input[index]
        index++
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`)

}

sumPrimeNonPrime([
    "0",
    "-9",
    "0",
    "stop"
])