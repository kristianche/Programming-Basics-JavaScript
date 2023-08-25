function animalType(input){
    let animal = String(input[0])

    switch (animal) {
        case 'dog':
            console.log('mammal')
            break
        
        case 'crocodile':
        case 'snake':
        case 'tortoise':
            console.log('reptile')
            break
        
        default:
            console.log('unknown')
            break
    }
}

animalType(['dog'])