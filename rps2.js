let count_user = 0
let count_cpu = 0
let count_tei = 0

const rps = () => {

    let cpu = Math.floor(Math.random() * 3)
    let user = prompt("enter R P or S")
    let cpu2 = ['R', 'P', 'S'][cpu]
    let play_again = true

    const game = (user, cpu2) => {

        if (play_again) {
            if (user === cpu2) {
                return "Match tei"
            } else if (user == 'R' && cpu2 == 'P') {
                return "Computer win"
            } else if (user == 'R' && cpu2 == 'S') {
                return "You win"
            } else if (user == 'P' && cpu2 == 'R') {
                return "You win"
            } else if (user == 'P' && cpu2 == 'S') {
                return "Computer win"
            } else if (user == 'S' && cpu2 == 'R') {
                return "Computer win"
            } else if (user == 'S' && cpu2 == 'P') {
                return "You win"
            }
        }
    }


    let result = game(user, cpu2)
    if (result === "You win") {
        count_user++
    } else if (result === "Match tei") {
        count_tei++
    } else {
        count_cpu++
    }
    console.log(`You select ${user}`)
    console.log(`Computer select ${cpu2}`)
    console.log(`Match result is: ${result}`)
    console.log(`Your Score is : ${count_user}`)
    console.log(`Computer Score is: ${count_cpu}`)
    console.log(`Total tei match is: ${count_tei}`)

    console.log(`\n`);
}

let n = prompt("How many rounds you have play?")
for (let i = 0; i < n; i++) {
    rps()
}