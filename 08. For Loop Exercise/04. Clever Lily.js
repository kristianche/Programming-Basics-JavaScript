function cleverLily (input) {
    let years = Number(input[0])
    let laundryPrice = Number(input[1])
    let toyPrice = Number(input[2])
    let money = 0, toysCounter = 0, moneyToBeAdded = 10

    for (let i = 1; i <= years; i++){
        if (i % 2 === 0){
            money += moneyToBeAdded
            money -= 1
            moneyToBeAdded += 10
        } else {
            toysCounter++
        }
    }

    money += toysCounter * toyPrice

    if (money >= laundryPrice){
        let moneyLeft = money - laundryPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let moneyNeeded = laundryPrice - money
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }

}

cleverLily(['10', '170.00', '6'])