function repainting(input){
    const nylon_price = 1.50
    const paint_price = 14.50
    const paint_divider_price = 5.00
    const bags_price = 0.40
    const additional_paint_percent = 0.10
    let nylon_quantity = Number(input[0]) + 2
    let paint_quantity = Number(input[1])
    paint_quantity += additional_paint_percent * paint_quantity
    let paint_divider_quantity = Number(input[2])
    let workers_hours = Number(input[3])
    let nylon_total_price = nylon_quantity * nylon_price
    let paint_total_price = paint_quantity * paint_price
    let paint_divider_total_price = paint_divider_quantity * paint_divider_price
    let materials_total_price = nylon_total_price + paint_total_price + paint_divider_total_price + bags_price
    let workers_per_hour_price = 0.30 * materials_total_price
    let workers_total_price = workers_hours * workers_per_hour_price
    let total_price = workers_total_price + materials_total_price
    console.log(total_price)
}

repainting(["10", "11", "4", "8"])