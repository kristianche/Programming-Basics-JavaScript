function yardGreening(input){
    let meters = Number(input[0])
    let price = meters * 7.61
    let discount = 0.18 * price
    let final_price = price - discount
    console.log(`The final price is: ${final_price} lv.`)
    console.log(`The discount is: ${discount} lv.`) 
}

yardGreening(['550'])