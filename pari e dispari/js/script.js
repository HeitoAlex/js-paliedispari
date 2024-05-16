let userChoice = prompt('Scegli pari o dispari');

while (userChoice !== 'pari' && userChoice !== 'dispari'){
    userChoice = prompt('Scegli pari o dispari');
}

let userNumber = Number.parseInt(prompt('Scegli un numero tra 1 e 5'), 10);

while (Number.isNaN(userNumber) || userNumber > 5 || userNumber < 1){
    userNumber = prompt('Scegli un numero tra 1 e 5');
}

let computerNumber = getRandomInt(1, 5);

function getRandomInt(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

function sum(numeroA, numeroB){
    let totale = (numeroA + numeroB);
    return totale;
}


if (sum(userNumber, computerNumber) % 2 === 0 && userChoice === 'pari'){
    console.log('HA VINTO l\'UTENTE!');
} else if (sum(userNumber, computerNumber) % 2 === 1 && userChoice === 'dispari'){
    console.log('HA VINTO l\'UTENTE!');
} else {
    console.log('HA VINTO IL COMPUTER!');
}

console.log(userChoice, userNumber, computerNumber, sum(userNumber, computerNumber));