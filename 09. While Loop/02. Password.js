function password (input) {
    let index = 0
    let username = String(input[index])
    index++
    let correctPassword = String(input[index])
    index++
    let password = String(input[index])

    while (password !== correctPassword){
        index++
        password = String(input[index]) 
    }

    console.log(`Welcome ${username}!`)
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
