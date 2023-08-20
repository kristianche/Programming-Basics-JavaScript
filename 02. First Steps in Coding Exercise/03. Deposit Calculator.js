function depositCalculator(input){
    let deposit_sum = Number(input[0])
    let deposit_months = Number(input[1])
    let deposit_percent = Number(input[2]) / 100
    let total_sum = deposit_sum + deposit_months * ((deposit_sum * deposit_percent) / 12)
    console.log(total_sum)
}

depositCalculator(["2350", "6", "7"])