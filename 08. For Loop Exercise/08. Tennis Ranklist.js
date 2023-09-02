function tennisRanklist (input) {
    let tournamentsCount = Number(input[0])
    let startingPoints = Number(input[1])
    let points = 0
    let tournamentsWon = 0

    for (let i = 2; i <= tournamentsCount + 2; i++){
        let tournamentStage = String(input[i])

        switch (tournamentStage){
            case 'W':
                points += 2000
                tournamentsWon += 1
                break
            case 'F':
                points += 1200
                break
            case 'SF':
                points += 720
                break
        }
    }
    
    let averagePoints = Math.floor(points / tournamentsCount)
    let percent = ((tournamentsWon / tournamentsCount) * 100).toFixed(2)

    console.log(`Final points: ${points + startingPoints}`)
    console.log(`Average points: ${averagePoints}`)
    console.log(`${percent}%`)
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])
