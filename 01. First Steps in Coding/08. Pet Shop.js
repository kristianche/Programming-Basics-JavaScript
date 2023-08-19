function petShop(input){
    let dogs_food_count = Number(input[0])
    let dogs_food_price = dogs_food_count * 2.50
    let cats_food_count = Number(input[1])
    let cats_food_price = cats_food_count * 4
    let total_price = dogs_food_price + cats_food_price
    console.log(`${total_price} lv.`)
}

petShop(['5', '4'])