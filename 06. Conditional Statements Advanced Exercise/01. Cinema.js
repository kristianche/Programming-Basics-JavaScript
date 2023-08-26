function cinema(input){
    let ticketType = String(input[0])
    let rows = Number(input[1])
    let cols = Number(input[2])
    let income, ticketPrice

    switch (ticketType) {
        case 'Premiere':
            ticketPrice = 12.00
            break;
        
        case 'Normal':
            ticketPrice = 7.50
            break
        
        case 'Discount':
            ticketPrice = 5.00
            break
    }

    income = (rows * cols) * ticketPrice
    console.log(`${income.toFixed(2)} leva`)
}

cinema(["Premiere", "10", "12"])
