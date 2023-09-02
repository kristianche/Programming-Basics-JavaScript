function trekkingMania (input) {
    let numberOfGroups = Number(input[0])
    let totalPeople = 0
    let K2Count = 0, musalaCount = 0, monblanCount = 0, kilimandzharoCount = 0, everestCount = 0 

    for (let i = 1; i <= numberOfGroups; i++){
        let group = Number(input[i])
        totalPeople += group

        if (group <= 5){
            musalaCount += group
        } else if (group >= 6 && group <= 12){
            monblanCount += group
        } else if (group >= 13 && group <= 25){
            kilimandzharoCount += group
        } else if (group >= 26 && group <= 40){
            K2Count += group
        } else if (group >= 41){
            everestCount += group
        }
    }

    p1 = ((musalaCount / totalPeople) * 100).toFixed(2)
    p2 = ((monblanCount / totalPeople) * 100).toFixed(2)
    p3 = ((kilimandzharoCount / totalPeople) * 100).toFixed(2)
    p4 = ((K2Count / totalPeople) * 100).toFixed(2)
    p5 = ((everestCount / totalPeople) * 100).toFixed(2)

    console.log(p1 + '%')
    console.log(p2 + '%')
    console.log(p3 + '%')
    console.log(p4 + '%')
    console.log(p5 + '%')
}

trekkingMania(["5", "25", "41", "31", "250", "6"])
