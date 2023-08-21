function passwordGuess(input){
    let password = String(input[0])
    const correct_password = 's3cr3t!P@ssw0rd'
    if (password === correct_password){
        console.log('Welcome')
    } else{
        console.log('Wrong password!')
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"])