function newHouse(input){
    let typeOfFlower = String(input[0])
    let quantity = Number(input[1])
    let budget = Number(input[2])
    let flowerPrice, total

    switch (typeOfFlower) {
        case 'Roses':
            flowerPrice = 5
            total = quantity * flowerPrice

            if (quantity > 80){
                total -= 0.10 * total
            }

            break
        
        case 'Dahlias':
            flowerPrice = 3.80
            total = quantity * flowerPrice

            if (quantity > 90){
                total -= 0.15 * total
            }

            break
        
        case 'Tulips':
            flowerPrice = 2.80
            total = quantity * flowerPrice

            if (quantity > 80){
                total -= 0.15 * total
            }

            break
        
        case 'Narcissus':
            flowerPrice = 3
            total = quantity * flowerPrice

            if (quantity < 120){
                total += 0.15 * total
            }

            break
        
        case 'Gladiolus':
            flowerPrice = 2.50
            total = quantity * flowerPrice
            
            if (quantity < 80){
                total += 0.20 * total
            }
            
            break
    }

    if (total <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${typeOfFlower} and ${(budget - total).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Roses", "55", "250"])
