function fishTank(input){
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3]) / 100
    let aquarium_size = length * width * height
    aquarium_size *= 0.001
    let litres_required = aquarium_size * (1 - percent)
    console.log(litres_required)

}

fishTank(["85", "75", "47", "17"])