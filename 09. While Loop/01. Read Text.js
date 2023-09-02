function readText (input) {
    let index = 0
    let text = String(input[index])
    index++

    while (text !== 'Stop'){
        console.log(text)
        text = String(input[index])
        index++
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])