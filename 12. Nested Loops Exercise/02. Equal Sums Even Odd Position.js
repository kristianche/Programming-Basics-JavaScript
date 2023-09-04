function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let printLine = ``

    for (let i = firstNum; i <= secondNum; i++) {

        let currentNum = "" + i
        let oddSum = 0
        let evenSum = 0

        for (let y = 0; y < currentNum.length; y++) {

            let currentDigit = Number(currentNum.charAt(y))

            if (y % 2 === 0) {
                evenSum += currentDigit
            } else {
                oddSum += currentDigit
            }
        }

        if (oddSum === evenSum) {
            printLine += `${i} `
        }

    }
    console.log(printLine)

}
equalSumsEvenOddPosition([
    "100000",
    "100050"
])