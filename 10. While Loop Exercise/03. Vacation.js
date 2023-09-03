function vacation (input) {
    let excursionCost = Number(input[0])
    let money = Number(input[1])
    let totalDays = 0, index = 2, daysSpent = 0, excursion = true

    while (true){
        let action = String(input[index])
        let sum = Number(input[index + 1])

        switch (action){
            case 'save':
                money += sum
                daysSpent = 0
                break
            
            case 'spend':
                if (sum > money){
                    money = 0
                } else {
                    money -= sum
                }

                daysSpent++
                break
        }

        totalDays++

        if (daysSpent === 5) {
            excursion = false
            break
        }

        if (money >= excursionCost){
            excursion = true
            break
        }

        index+=2
    }

    if (excursion) {
        console.log(`You saved the money for ${totalDays} days.`)
    } else {
        console.log("You can't save the money.");
        console.log(totalDays)
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

