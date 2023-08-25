function shopping(input){
    let budget = Number(input[0])
    let videocards = Number(input[1])
    let processor = Number(input[2])
    let ram = Number(input[3])

    const videocardPrice = 250
    let videoCardsTotal = videocards * videocardPrice

    const processorPrice = 0.35 * videoCardsTotal
    let processorTotal = processor * processorPrice

    const ramPrice = 0.10 * videoCardsTotal
    let ramTotal = ramPrice * ram

    let total = videoCardsTotal + processorTotal + ramTotal

    if (videocards > processor){
        total -= 0.15 * total
    }

    if (budget >= total ){
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
    }
}

shopping(["900", "2", "1", "3"])
