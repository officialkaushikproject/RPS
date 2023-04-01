let again = true
rps_game = (usr) => {
    let cpu = Math.floor(Math.random() * 3)
    let user = usr
    let cpu2 = ['Rock', 'Paper', 'Scissor'][cpu]

    const game = (user, cpu2) => {
        if (user === cpu2) {
            return 'Match tei'
        } else if (user == 'Rock' && cpu2 == 'Paper') {
            return "Better Luck Next Time"
        } else if (user == 'Rock' && cpu2 == 'Scissor') {
            return "Congrats..You win the match"
        } else if (user == 'Paper' && cpu2 == 'Rock') {
            return "Congrats..You win the match"
        } else if (user == 'Paper' && cpu2 == 'Scissor') {
            return "Better Luck Next Time"
        } else if (user == 'Scissor' && cpu2 == 'Rock') {
            return "Better Luck Next Time"
        } else {
            return "Congrats..You win the match"
        }
    }
    result = game(user, cpu2)
    document.getElementById('result').innerText = result
    document.getElementById('cpu').innerText = cpu2
    document.getElementById('user').innerText = user
    again = false
}
document.getElementById('r_btn').addEventListener('click', () => {
    let rock = document.getElementById('r_btn').value
    if (again) {
        rps_game(rock)
    }

})
document.getElementById('p_btn').addEventListener('click', () => {
    let paper = document.getElementById('p_btn').value
    if (again) {
        rps_game(paper)
    }
})
document.getElementById('s_btn').addEventListener('click', () => {
    let scissor = document.getElementById('s_btn').value
    if (again) {
        rps_game(scissor)
    }
})

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('result').innerText = ''
    document.getElementById('cpu').innerText = ''
    document.getElementById('user').innerText = ''
    again = true
})