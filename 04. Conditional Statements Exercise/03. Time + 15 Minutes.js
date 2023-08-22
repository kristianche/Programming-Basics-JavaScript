function timePlus15Minutes(input){
    let hour = Number(input[0])
    let minutes = Number(input[1])
    if (minutes + 15 >= 60){
        minutes = (minutes + 15) - 60
        hour += 1
    } else {
        minutes += 15
    }

    if (hour === 24){
        hour = 0
    }

    if (minutes < 10){
        console.log(`${hour}:0${minutes}`)
    } else {
        console.log(`${hour}:${minutes}`)
    }
}

timePlus15Minutes(["23", "59"])