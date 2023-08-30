function multiplicationTable (input){
    let multiplicationNumber = Number(input[0])
    for (let i = 1; i <= 10; i++){
        let result = multiplicationNumber * i
        console.log(`${i} * ${multiplicationNumber} = ${result}`)
    }
}

multiplicationTable(['5'])