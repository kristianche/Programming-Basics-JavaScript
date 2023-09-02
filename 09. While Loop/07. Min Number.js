function minNumber (input) {
    let index = 0
    let minNumber = 2147483647

    while (true) {
        let commandOrNumber = input[index]

        if (commandOrNumber === 'Stop'){
            break
        }

        let number = Number(commandOrNumber)

        if (number < minNumber){
            minNumber = number
        }

        index++
    }

    console.log(minNumber)
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
