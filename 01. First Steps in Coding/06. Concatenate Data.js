function concatenateData(input){
    let first_name = input[0]
    let last_name = input[1]
    let age = input[2]
    let city = input[3]
    console.log(`You are ${first_name} ${last_name}, a ${Number(age)}-years old person from ${city}.`)
}

concatenateData(['Kristian', 'Chelebiev', '16', 'Burgas'])