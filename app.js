var h_score = 0

var c_score = 0

function askName(){
    var a = prompt("What is your name?")
    return a
}

function greeting(a){
    alert (`Welcome, ${a}, to the new and improved Twenty with Functions! Here, You will play against the computer to see who can get closer to twenty. If you go over twenty, you lose. The same goes for the computer. If you both go over twenty, then whoever is closer to Twenty will win. If you both get the same number, you will tie.`)
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

    c_total = 0

    do{

        c_num = Math.floor(Math.random() * 10) + 1

        c_total = c_num + c_total

        alert(`The computer drew ${c_num}. It's total is ${c_total}.`)

    } while (c_total < 16)

    return c_total
}

function winChoice(a, b){
    
    if ((a != 20) && (b != 20)){

        if ((a < 20) && (b < 20)){

            if (a > b){

                alert(`You got ${a}. The computer got ${b}. Because you didn't go over 20 and your number was greater than the computer, you win!`)

                h_score++

            } else if (a < b){

                alert(`You got ${a}. The computer got ${b}. Because you didn't go over 20 but your number was less than the computer, the computer wins!`)

                c_score++

            }

        } else if ((a < 20) && (b > 20)){

            alert(`You got ${a}. The computer got ${b}. The computer went over 20, so, by default, you win!`)

            h_score++

        } else if ((a > 20) && (b < 20)){

            alert(`You got ${a}. The computer got ${b}. you went over 20, so, by default, the computer wins!`)

            c_score++

        } else if ((a > 20) && (b < 20)){

            if (a > b){

                alert(`You got ${a}. The computer got ${a}. Because you both went over 20 and your number was greater than the computer, the computer wins!`)

                c_score++

            } else if (a < b){

                alert(`You got ${a}. The computer got ${b}. Because you both went over 20 and your number was less than the computer, you win!`)

                h_score++

            }

        }

    } else if ((a == 20) && (b != 20)){

        alert (`You got twenty and the computer didn't! You win!`)

        h_score++

    } else if ((a != 20) && (b == 20)){

        alert (`The computer got twenty and you didn't! The computer wins!`)

        c_score++

    } else if ((a == 20) && (b == 20)){

        alert (`You and the computer got twenty! It's a tie!`)

    }


}

winChoice(userNum(), comNum())