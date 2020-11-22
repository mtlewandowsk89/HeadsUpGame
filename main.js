const words = ['Donald Trump', 'Barack Obama', 'Joe Biden', 'Marilyn Monroe', 'Abraham Lincoln', 'Angelina Jolie', 'Kim Kardashian', 'Taylor Swift', 'Steven Spielberg', 'Oprah Winfrey', 'Tom Hanks', 'Brad Pitt', 'Elvis Presley', 'Bill Clinton', 'Tom Cruise', 'George Clooney', 'Katy Perry', 'John F. Kennedy', 'Princess Diana', 'Will Smith', 'Shaun T', 'Jennifer Aniston', 'David Beckham', 'Justin Bieber', 'Jay-Z', 'Miley Cyrus', 'Ben Affleck', 'Julia Roberts', 'Rihanna', 'Johnny Depp', 'Adele', 'Leonardo DiCaprio', 'Britney Spears', 'Adam Sandler', 'Serena Williams', 'Drake', 'Michael Jordan', 'Hillary Clinton', 'Alfred Hitchcock', 'Tiger Woods', 'Al Gore', 'Paris Hilton', 'Cameron Diaz', 'Matt Damon', 'Bruce Willis', 'Chris Pratt', 'David Letterman', 'Jake Gyllenhaal', 'Steve Buscemi', 'Nicole Kidman',
'taco', 'fajita', 'quesadilla', 'nachos', 'hamburger', 'french fries', 'hot dog', 'spaghetti', 'onion rings', 'lasagna', 'pizza', 'ravioli', 'grapes', 'apple', 'pear', 'orange', 'watermelon', 'kiwi', 'cheese', 'pineapple', 'broccoli', 'cauliflower', 'spinach', 'potato', 'pudding', 'yogurt', 'jell-o', 'cereal', 'milk', 'soda', 'water', 'beer', 'wine', 'tequila', 'vodka', 'rum', 'whiskey', 'gin', 'limoncello', 'brandy', 'scotch', 'mead', 'eggs', 'tofu', 'pepperoni', 'steak', 'chicken', 'pork', 'tuna', 'salmon', 'shrimp', 'catfish', 'smoothie', 'salad', 'tomato', 'lettuce', 'ketchup', 'bbq sauce', 'ranch', '1000 island', 'teriyaki', 'mustard', 'mushroom', 'bell pepper', 'onion', 'tortillas', 'banana', 'honeydew melon', 'dragonfruit', 'ramen', 'fried rice', 'pad thai', 'sub sandwich', 'gyro', 'olive', 'ice cream', 'lollipop', 'hot fudge', 'sprinkles', 'caramel', 'chocolate', 'cinnamon', 'pie', 'cookies', 'lemon', 'lime', 'grapefruit',
'cat', 'dog', 'horse', 'llama', 'chicken', 'goat', 'rooster', 'turkey', 'mouse', 'rat', 'gerbil', 'hamster', 'guinea pig', 'chinchilla', 'lamb', 'cow', 'zebra', 'ox', 'giraffe', 'gecko', 'snake', 'chameleon', 'toad', 'frog', 'bat', 'pigeon', 'eagle', 'hawk', 'wasp', 'bee', 'beetle', 'ant', 'ladybug', 'caterpillar', 'worm', 'butterfly', 'mosquito', 'flea', 'praying mantis', 'stick bug', 'slug', 'snail', 'albatross', 'seagull', 'dove', 'crane', 'flamingo', 'pelican', 'stork', 'ostrich', 'emu', 'turtle', 'tortoise', 'plankton', 'dolphin', 'whale', 'shark', 'seal', 'squid', 'octopus', 'crab', 'lobster', 'tiger', 'wolf', 'bear', 'lion', 'leopard', 'cheetah', 'jaguar', 'elephant', 'skunk', 'anteater', 'hippopotamus', 'alligator', 'crocodile', 'walrus', 'stingray', 'starfish', 'seahorse', 'weasel', 'orangutan', 'gorilla', 'baboon', 'fox', 'hummingbird', 'woodpecker', 'coyote', 'javelina', 'scorpion', 'tarantula', 'rhino', 'cockroach', 'cricket', 'bull'];
let currentWord;
let shownWords = [];
let checkAgain = true;

countdown = () => {
    if (window.DeviceOrientationEvent) {
        document.getElementById('testing').innerHTML = 'supported';
        window.addEventListener("deviceorientation", handleOrientation, true);
    } else {
        document.getElementById('testing').innerHTML = 'not supported';
    }
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

handleOrientation = (event) => {
    document.getElementById('testing').innerHTML = 'supported ' + event.gamma;
    if (checkAgain) {
        if (event.gamma === -30) {
            checkAgain = false;
            next(false);
            setTimeout(() => {
                checkAgain = true;
            }, 2000)
        } else if (event.gamma === 45) {
            checkAgain = false;
            next(true);
            setTimeout(() => {
                checkAgain = true;
            }, 2000);
        }
    }
}

startTimer = () => {
    let i = 60;
    document.getElementById('timeLeft').innerHTML = '1:00';
    let timer = setInterval(() => {
        if (i > 1) {
            i--;
            document.getElementById('timeLeft').innerHTML = i >= 10 ? `0:${i}` : `0:0${i}`;
        } else {
            document.getElementById('timeLeft').innerHTML = '';
            document.getElementById('correct').style.display = 'none';
            document.getElementById('pass').style.display = 'none';
            let audio = new Audio('./airHorn.mp3');
            audio.play();
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
    let audio = new Audio('./ting.mp3');
    audio.play();
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