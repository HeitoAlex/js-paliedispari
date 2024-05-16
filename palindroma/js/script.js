const userWord = prompt('Scrivi una parola');

function reverseWord (testo){
    let reversedString = '';

    for (let i = userWord.length -1; i >= 0; i--){
        reversedString += userWord[i];
    }

    return reversedString;
}

if (reverseWord(userWord) === userWord){
    console.log('La parola è palindroma')
} else {
    console.log('La parola NON è palindroma')
}
