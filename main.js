const words = ['Donald Trump', 'Barack Obama', 'Joe Biden', 'Marilyn Monroe', 'Abraham Lincoln', 'Angelina Jolie', 'Kim Kardashian', 'Taylor Swift', 'Steven Spielberg', 'Oprah Winfrey', 'Tom Hanks', 'Brad Pitt', 'Elvis Presley', 'Bill Clinton', 'Tom Cruise', 'George Clooney', 'Katy Perry', 'John F. Kennedy', 'Princess Diana', 'Will Smith', 'Shaun T', 'Jennifer Aniston', 'David Beckham', 'Justin Bieber', 'Jay-Z', 'Miley Cyrus', 'Ben Affleck', 'Julia Roberts', 'Rihanna', 'Johnny Depp', 'Adele', 'Leonardo DiCaprio', 'Britney Spears', 'Adam Sandler', 'Serena Williams', 'Drake', 'Michael Jordan', 'Hillary Clinton', 'Alfred Hitchcock', 'Tiger Woods', 'Al Gore', 'Paris Hilton', 'Cameron Diaz', 'Matt Damon', 'Bruce Willis', 'Chris Pratt', 'David Letterman', 'Jake Gyllenhaal', 'Steve Buscemi', 'Nicole Kidman'];
let currentWord;
let shownWords = [];

startGame = () => {
    countdown();
}

countdown = () => {
    let i = 3;
    document.getElementById('countdown').innerHTML = i;
    document.getElementById('start').style.display = 'none';
    let timer = setInterval(() => {
        if (i > 1) {
            i--;
            document.getElementById('countdown').innerHTML = i;
        } else {
            document.getElementById('countdown').innerHTML = '';
            startTimer();
            showWord();
            document.getElementById('correct').style.display = 'inline-block';
            document.getElementById('pass').style.display = 'inline-block';
            clearInterval(timer);
        }
    }, 1000);
}

startTimer = () => {
    let i = 60;
    document.getElementById('timeLeft').innerHTML = `${i} seconds remaining.`;
    let timer = setInterval(() => {
        if (i > 1) {
            i--;
            document.getElementById('timeLeft').innerHTML = `${i} seconds remaining.`;
        } else {
            document.getElementById('timeLeft').innerHTML = '';
            document.getElementById('correct').style.display = 'none';
            document.getElementById('pass').style.display = 'none';
            // let audio = new Audio('./airHorn.mp3');
            // audio.play();
            clearInterval(timer);
            document.getElementById('word').innerHTML = '';
            showResults();
        }
    }, 1000);
}

showWord = () => {
    currentWord = words[Math.floor(Math.random() * words.length)];
    shownWords.forEach((item) => {
        if (item.word === currentWord) {
            showWord();
        }
    });
    document.getElementById('word').innerHTML = currentWord;
}

next = (correct) => {
    shownWords.push({"word": currentWord, "correct": correct});
    showWord();
}

showResults = () => {
    shownWords.forEach((item) => {
        let e = document.createElement('div');
        e.innerHTML = item.word;
        if (item.correct) {
            e.classList.add('correct');
        } else {
            e.classList.add('incorrect');
        }
        document.getElementById('results').appendChild(e);
    });
    document.getElementById('playAgain').style.display = 'inline-block';
}

reset = () => {
    currentWord = null;
    shownWords = [];
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('playAgain').style.display = 'none';
    document.getElementById('results').innerHTML = '';
}