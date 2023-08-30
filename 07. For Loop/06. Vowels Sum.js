function vowelsSum (input) {
    let text = String(input[0])
    let sum = 0

    for (let ch of text){
        if (ch === 'a'){
            sum += 1
        } else if (ch === 'e'){
            sum += 2
        } else if (ch === 'i'){
            sum += 3
        } else if (ch === 'o'){
            sum += 4
        } else if (ch === 'u'){
            sum += 5
        }
    }

    console.log(sum)
}

vowelsSum(['bamboo'])