function evenPowersof2 (input) {
    let number = Number(input[0])

    for (let i = 0; i <= number; i++){
        if (i % 2 === 0){
            console.log(2 ** i)
        }
    }
}

evenPowersof2(['3'])