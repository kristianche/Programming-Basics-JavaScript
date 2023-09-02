function maxNumber (input) {
    let index = 0
    let maxNumber = -2147483648

    while (true) {
        let commandOrNumber = input[index]

        if (commandOrNumber === 'Stop'){
            break
        }

        let number = Number(commandOrNumber)

        if (number > maxNumber){
            maxNumber = number
        }

        index++
    }

    console.log(maxNumber)
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])
