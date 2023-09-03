function traveling (input) {
    let index = 0, excursionPrice = 0, savedMoney = 0, money
    let destination = String(input[index])
    index++

    while (destination !== 'End'){
        excursionPrice = Number(input[index])
        index++

        while (savedMoney < excursionPrice){
            money = Number(input[index])
            savedMoney += money
            index ++
        }

        console.log(`Going to ${destination}!`)
        destination = String(input[index])
        index++
        savedMoney = 0
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
