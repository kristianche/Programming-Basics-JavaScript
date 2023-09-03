function walking (input) {
    let totalSteps = 0, index = 0

    while (true) {
        let commandOrSteps = input[index]

        if (commandOrSteps === 'Going home'){
            let finalSteps = Number(input[index + 1])
            totalSteps += finalSteps
            break
        }

        let steps = Number(commandOrSteps)

        totalSteps += steps

        if (totalSteps >= 10000){
            break
        }

        index++
    }

    if (totalSteps >= 10000){
        console.log('Goal reached! Good job!')
        console.log(`${totalSteps - 10000} steps over the goal!`)
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`)
    }
}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

