function cinemaTicket(input){
    let day = String(input[0])

    switch (day) {
        case 'Monday':
            console.log(12)
            break
        case 'Tuesday':
            console.log(12)
            break
        case 'Wednesday':
            console.log(14)
            break
        case 'Thursday':
            console.log(14)
            break
        case 'Friday':
            console.log(12)
            break
        case'Sunday':
        case 'Saturday':
            console.log(16)
    }
}

cinemaTicket(['Monday'])