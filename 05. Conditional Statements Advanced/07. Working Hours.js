function workingHours(input){
    let hour = Number(input[0])
    let day = String(input[1])

    if (day === 'Sunday'){
        console.log('closed')
    } else{
        if (hour <= 18 && hour >= 10){
            console.log('open')
        } else {
            console.log('closed')
        }
    }

}

workingHours(['11', 'Monday'])