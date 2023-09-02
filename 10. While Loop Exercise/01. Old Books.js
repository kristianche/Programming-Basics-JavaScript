function oldBooks (input) {
    let searchedBook = String(input[0])
    let booksChecked = 1
    let isSearchedBookFound = false

    while (true){
        let book = String(input[booksChecked])

        if (book === 'No More Books'){
            break
        }

        if (book === searchedBook){
            isSearchedBookFound = true
            break
        }

        booksChecked++
    }

    if (isSearchedBookFound){
        console.log(`You checked ${booksChecked - 1} books and found it.`)
    } else {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${booksChecked - 1} books.`)
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

