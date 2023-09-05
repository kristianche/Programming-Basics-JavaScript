function cinemaTickets (input) {

    let index = 0
    let command = input[index]
    index++

    let totalTicketSold = 0
    let studentTicketsSold = 0
    let standardTicketsSold = 0
    let kidTicketsSold = 0

    while (command !== "Finish") {

        let movieName = command
        let freeSpots = Number(input[index])
        index++
        let ticketSold = 0

        let tempCommand = input[index]
        index++

        while (tempCommand !== "End") {

            let ticket = tempCommand
            ticketSold++

            switch (ticket) {
                case "standard": standardTicketsSold++; break
                case "student": studentTicketsSold++; break
                case "kid": kidTicketsSold++; break
            }
            if (ticketSold === freeSpots) {
                break;
            }
            tempCommand = input[index]
            index++

        }
        totalTicketSold += ticketSold
        console.log(`${movieName} - ${(ticketSold / freeSpots * 100).toFixed(2)}% full.`)
        command = input[index]
        index++
    }
    console.log(`Total tickets: ${studentTicketsSold + standardTicketsSold + kidTicketsSold}`)
    console.log(`${(studentTicketsSold / totalTicketSold * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTicketsSold / totalTicketSold * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTicketsSold / totalTicketSold * 100).toFixed(2)}% kids tickets.`)
    
}
cinemaTickets([
"Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"
])