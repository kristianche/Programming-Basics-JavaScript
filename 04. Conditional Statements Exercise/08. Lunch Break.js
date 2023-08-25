function lunchBreak(input){
    let showName = String(input[0])
    let episodeTime = Number(input[1])
    let breakTime = Number(input[2])

    let lunchTime = 0.125 * breakTime
    let restTime = 0.25 * breakTime

    let timeLeft = breakTime - (restTime + lunchTime)

    if (timeLeft >= episodeTime ){
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(episodeTime - timeLeft)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones", "60", "96"])
