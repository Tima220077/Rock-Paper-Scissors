const score1El = document.getElementById("score1")
const score2El = document.getElementById("score2")
const commentEl = document.getElementById("comment-el")
const rockBtn = document.getElementById("r")
const paperBtn = document.getElementById("p")
const scissorsBtn = document.getElementById("s")
const buttons = document.getElementsByTagName("button")

let arrEmj = ["r","p",
"s"]
let score1 = 0
let score2 = 0
let text = ""

for (const button of buttons) {
    button.addEventListener("click", generateGame)
}

function generateGame(e){
    getRandom()
    let emjBtn = e.target.id
    let newEmj = emjBtn + text
    // if (newEmj == "rs" ) {
        
    //     score1El.textContent = newEmj
    // }
    switch (newEmj) {
        case "rs":
        case "pr":
        case "sp":
            console.log("win")
            commentEl.textContent = "You won"
            score1++
        //winning case
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("lost")
            //losing case
            commentEl.textContent = "You lost"
            score2++
            break;
        case "rr":
        case "ss":
        case "pp":
           console.log("draw")
           commentEl.textContent = "It's a draw"
           score1++
           score2++
           break;
    }
    score1El.textContent = score1
    score2El.textContent = score2
}
function getRandom(){
    let randomE = Math.floor(Math.random()*3)
    text = arrEmj[randomE]
}

