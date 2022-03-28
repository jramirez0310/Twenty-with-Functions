function askName(){
    var a = prompt("What is your name?")
    return a
}

function greeting(a){
    alert (`Welcome, ${a}, to the new and improved Twenty with Functions!`)
}

greeting(askName())

function userNum(){
    alert( `It is now your turn.`)

    h_num = Math.floor(Math.random() * 10) + 1

    h_total = 0 + h_num

    alert(`You drew ${h_num}. Your total is ${h_total}`)

    do{
        h_choice = prompt("Would you like to draw again? (y for yes, n for no)")

        if (h_choice == "y"){

            h_num = Math.floor(Math.random() * 10) + 1

            h_total = h_total + h_num

            alert(`You drew ${h_num}. Your total is ${h_total}`)
            
        } else if (h_choice == "n"){

            break

        } else {

            alert("I said put in 'y' or 'n'. Next time, DO WHAT YOU ARE TOLD!")

        }
    }while (h_total < 20)

    return h_total
}

function comNum(){
    alert(`It is now the computer's turn`)

    do{

        c_num = Math.floor(Math.random() * 10) + 1

        c_total = c_num + c_total

        alert(`The computer drew ${c_num}. It's total is ${c_total}.`)

    } while (c_total < 16)
}