
/*
#### testes ####
let number = Math.random()

number = number*6

number = Math.floor(number)+1
console.log(number)
*/

const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const guess = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function randomValue(){
        //ROUND para arredondar o numero aleatorio que vai ser gerado
        return Math.round(Math.random() * this.max);
    }
}

let numberDraw = guess.numberDraw();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: '+ value;
}


function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Digite algum valor!')
        return; 
    };
    
    updateAttempt(attempt, ++guess.attemptsNumber);

    if(numberDraw == kick){
        playAgain();
        status.innerHTML = 'Parabens, você acertou';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    }else if(numberDraw > kick){
        status.innerHTML = 'O numero é maior!';
        status.style.color = '#de4251';
        clear();
    }else if(numberDraw < kick){
        status.innerHTML = 'O numero é menor!';
        status.style.color = '#de4251';
        clear();
    }
}

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
} 

function restart(){
    document.location.reload(true);
}

function clear(){
    document.getElementById('kick').value = '';
}

