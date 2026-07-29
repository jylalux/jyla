let random_number = Math.floor(Math.random()*100) + 1
console.log(random_number)

const submit_button = document.getElementById("guess_submit")
const guess_input = document.getElementById("guess_input")

submit_button.addEventListener('click', function(){
    console.log("Clicked!")
    console.log(guess_input.value)
})