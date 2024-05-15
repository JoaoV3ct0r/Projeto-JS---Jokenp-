const result = document.querySelector('.result')
const spanMy = document.querySelector('.spanMy')
const spanBot = document.querySelector('.spanBot')

let scoreMy = 0
let scoreBot = 0

const playHuman = (humanChoice) =>{
    
    playTheGame(humanChoice, playMachine()) // PlayTheGame inicia o jogo chamando o player e o bot
}

const playMachine = () =>{
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3) // Math.floor (Arrendonda para baixo)

    return choices[randomNumber] // Math.random
}

const playTheGame = (human, machine) => {
    if (human === machine){
        scoreBot++
        scoreMy++
        spanBot.innerHTML = scoreBot
        spanMy.innerHTML = scoreMy
        result.innerHTML = 'Deu empate!'
    } else if (human === 'papel' && machine === 'pedra' 
        || human === 'pedra' && machine === 'tesoura'
        || human === 'tesoura' && machine === 'papel'){
        scoreMy++
        spanMy.innerHTML = scoreMy
        result.innerHTML = 'Você ganhou!'
    } else {
        scoreBot++
        spanBot.innerHTML = scoreBot
        result.innerHTML = 'Você perdeu para a Aurora!'
    }
}