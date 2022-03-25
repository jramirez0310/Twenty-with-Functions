function askName(){
    var a = prompt("What is your name?")
    return a
}

function greeting(a){
    alert (`Welcome, ${a}, to the new and improved Twenty with Functions!`)
}

greeting(askName())