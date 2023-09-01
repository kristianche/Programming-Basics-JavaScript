function salary (input) {
    let openTabs = Number(input[0])
    let salary = Number(input[1])

    for (let i = 2; i <= openTabs + 2; i++){
        tabName = String(input[i])
        if (tabName === 'Facebook'){
            salary -= 150
        } else if (tabName === 'Instagram'){
            salary -= 100
        } else if (tabName === 'Reddit'){
            salary -= 50
        }
    }

    if (salary <= 0){
        console.log("You have lost your salary." )
    } else {
        console.log(salary)
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])	
