function sumNumbers (input) {
    let index = 0
    let finalNumber = Number(input[index])
    index++
    let sum = 0
    
    while (sum < finalNumber){
        let number = Number(input[index])
        sum += number
        index++
    }

    console.log(sum)
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
