function suppliesForSchool(input){
    const pen_price = 5.80
    const marker_price = 7.20
    const preparat_price = 1.20
    let pens_count = Number(input[0])
    let marker_count = Number(input[1])
    let preparat_count = Number(input[2])
    let discount_percent = Number(input[3]) / 100
    let pens_total_price = pen_price * pens_count
    let marker_total_price = marker_price * marker_count
    let preparat_total_price = preparat_price * preparat_count
    let total_price = pens_total_price + marker_total_price + preparat_total_price
    let discount = discount_percent * total_price
    total_price -= discount
    console.log(total_price) 
}

suppliesForSchool(["2", "3", "4", "25"])

