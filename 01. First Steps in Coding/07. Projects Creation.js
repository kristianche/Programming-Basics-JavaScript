function projectsCreation(input){
    let name = input[0]
    let projects = Number(input[1])
    let hours = 3 * projects
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)
}

projectsCreation(["George", "4"])