function accountBalance (input) {
    let total = 0
    let index = 0

    while (true) {
        let inputed = input[index]

        if (inputed === 'NoMoreMoney'){
            break
        }

        let money = Number(inputed)

        if (money < 0){
            console.log('Invalid operation!')
            break
        }

        total += money
        console.log(`Increase: ${money.toFixed(2)}`)
        index++
    }

    console.log(`Total: ${total.toFixed(2)}`)
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
