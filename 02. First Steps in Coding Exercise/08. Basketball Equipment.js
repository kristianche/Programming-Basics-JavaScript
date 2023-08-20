function basketballEquimpment(input){
    let year_price = Number(input[0])
    let shoes_price = year_price - (0.40 * year_price)
    let outfit = shoes_price - (0.20 * shoes_price)
    let ball = 0.25 * outfit
    let accessories = 0.2 * ball
    let total_price = year_price + shoes_price + outfit + ball + accessories
    console.log(total_price)
}

basketballEquimpment(["365"])