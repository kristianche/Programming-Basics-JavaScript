function vacationBooksList(input){
    let book_pages = Number(input[0]) 
    let pages_per_hour = Number(input[1])
    let days = Number(input[2])
    let total_book_hours = book_pages / pages_per_hour
    let hours_per_day = total_book_hours / days
    console.log(hours_per_day)
}

vacationBooksList(["212", "20", "2"])