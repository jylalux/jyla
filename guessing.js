let random_number = Math.floor(Math.random()*100) + 1
console.log(random_number)

const submit_button = document.getElementById("guess_submit")
const guess_input = document.getElementById("guess_input")
const guesses = document.getElementById("guesses_container")
const guesses_of_nums = document.getElementById("guess_number")

let num_guesses = 0

function checkGuess(){
    num_guesses = num_guesses + 1
    guesses_of_nums.innerHTML = num_guesses

    const guess = guess_input.value

    if(guess == random_number){
        console.log("you got it!")
        guesses.innerHTML += guess + "you got it!"
        return
    }

    let text = "" 
    if(guess > random_number){
        text = "(high)"
    }else if(guess < random_number){
        text = "(low)"
    }
    guesses.innerHTML = guesses.innerHTML + guess + text + "<br>"
}

submit_button.addEventListener('click', checkGuess)
