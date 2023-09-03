function combinations (input) {
    let number = Number(input[0])
    let validCombinations = 0
    for (let n1 = 0; n1 <= number; n1++){
        for (let n2 = 0; n2 <= number; n2++){
            for (let n3 = 0; n3 <= number; n3++){
                if ((n1 + n2 + n3) === number){
                    validCombinations++
                }
            }
        }
    }

    console.log(validCombinations)
}

combinations(['25'])