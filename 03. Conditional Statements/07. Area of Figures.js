function areaOfFigures(input){
    let shape = String(input[0])
    let S, a, b, r, h;
    switch (shape){
        case 'square':
            a = Number(input[1])
            S = a * a
            break
        case 'rectangle':
            a = Number(input[1])
            b = Number(input[2])
            S = a * b
            break
        case 'circle':
            r = Number(input[1])
            S = r * r * Math.PI
            break
        case 'triangle':
            a = Number(input[1])
            h = Number(input[2])
            S = (a * h) / 2
            break
    
    }
    console.log(S.toFixed(3))
}

areaOfFigures(['circle', '6'])