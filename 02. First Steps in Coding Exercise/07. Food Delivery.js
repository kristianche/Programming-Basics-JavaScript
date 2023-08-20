function foodDelivery(input){
    const chicken_menu = 10.35
    const fish_menu = 12.40
    const vegeterian_menu = 8.15
    const delivery_price = 2.50
    let chicken_menu_count = Number(input[0])
    let fish_menu_count = Number(input[1])
    let vegeterian_menu_count = Number(input[2])
    let chicken_menus_total_price = chicken_menu * chicken_menu_count
    let vegeterian_menus_total_price = vegeterian_menu * vegeterian_menu_count
    let fish_menus_total_price = fish_menu * fish_menu_count
    let menus_total_price = chicken_menus_total_price + vegeterian_menus_total_price + fish_menus_total_price
    let dessert_price = 0.20 * menus_total_price
    let total_price = menus_total_price + dessert_price + delivery_price
    console.log(total_price)
}

foodDelivery(["2", "4", "3"])