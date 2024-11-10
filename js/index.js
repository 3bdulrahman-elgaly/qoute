const arrayOfQuotes = [
    {'author': 'Mahatma Gandhi', 'quote': 'Be the change that you wish to see in the world.'},
    {'author': 'Helen Keller', 'quote': 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'},
    {'author': 'Oscar Wilde', 'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'},
    {'author': 'Friedrich Nietzsche', 'quote': 'Without music, life would be a mistake.'},
    {'author': 'Nelson Mandela', 'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'},
    {'author': 'Andre Gide', 'quote': 'It is better to be hated for what you are than to be loved for what you are not.'}
];

var lastIndex = -1;  

function generateQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    setTimeout(() => {
        document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[randomIndex].quote}\"`;
        document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[randomIndex].author}`;

        
    });
}
