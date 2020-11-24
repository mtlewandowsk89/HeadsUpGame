const words = ['Donald Trump', 'Barack Obama', 'Joe Biden', 'Marilyn Monroe', 'Abraham Lincoln', 'Angelina Jolie', 'Kim Kardashian', 'Taylor Swift', 'Steven Spielberg', 'Oprah Winfrey', 'Tom Hanks', 'Brad Pitt', 'Elvis Presley', 'Bill Clinton', 'Tom Cruise', 'George Clooney', 'Katy Perry', 'John F. Kennedy', 'Princess Diana', 'Will Smith', 'Shaun T', 'Jennifer Aniston', 'David Beckham', 'Justin Bieber', 'Jay-Z', 'Miley Cyrus', 'Ben Affleck', 'Julia Roberts', 'Rihanna', 'Johnny Depp', 'Adele', 'Leonardo DiCaprio', 'Britney Spears', 'Adam Sandler', 'Serena Williams', 'Drake', 'Michael Jordan', 'Hillary Clinton', 'Alfred Hitchcock', 'Tiger Woods', 'Al Gore', 'Paris Hilton', 'Cameron Diaz', 'Matt Damon', 'Bruce Willis', 'Chris Pratt', 'David Letterman', 'Jake Gyllenhaal', 'Steve Buscemi', 'Nicole Kidman', 'Michael Jackson', 'Michael Phelps', 'Prince', 'Tim Burton', 'George Bush', 'George Washington', 'Ben Franklin', 'Thomas Edison', 'Marilyn Manson',
'taco', 'fajitas', 'quesadilla', 'nachos', 'hamburger', 'french fries', 'hot dog', 'spaghetti', 'onion rings', 'lasagna', 'pizza', 'ravioli', 'grapes', 'apple', 'pear', 'orange', 'watermelon', 'kiwi', 'cheese', 'pineapple', 'broccoli', 'cauliflower', 'spinach', 'potato', 'pudding', 'yogurt', 'jell-o', 'cereal', 'milk', 'soda', 'water', 'beer', 'wine', 'tequila', 'vodka', 'rum', 'whiskey', 'gin', 'limoncello', 'brandy', 'scotch', 'mead', 'eggs', 'tofu', 'pepperoni', 'steak', 'chicken', 'pork', 'tuna', 'salmon', 'shrimp', 'catfish', 'smoothie', 'salad', 'tomato', 'lettuce', 'ketchup', 'bbq sauce', 'ranch', '1000 island', 'teriyaki', 'mustard', 'mushroom', 'bell pepper', 'onion', 'tortillas', 'banana', 'honeydew melon', 'dragonfruit', 'ramen', 'fried rice', 'pad thai', 'sub sandwich', 'gyro', 'olive', 'ice cream', 'lollipop', 'hot fudge', 'sprinkles', 'caramel', 'chocolate', 'cinnamon', 'pie', 'cookies', 'lemon', 'lime', 'grapefruit',
'cat', 'dog', 'horse', 'llama', 'chicken', 'goat', 'rooster', 'turkey', 'mouse', 'rat', 'gerbil', 'hamster', 'guinea pig', 'chinchilla', 'lamb', 'cow', 'zebra', 'ox', 'giraffe', 'gecko', 'snake', 'chameleon', 'toad', 'frog', 'bat', 'pigeon', 'eagle', 'hawk', 'wasp', 'bee', 'beetle', 'ant', 'ladybug', 'caterpillar', 'worm', 'butterfly', 'mosquito', 'flea', 'praying mantis', 'stick bug', 'slug', 'snail', 'albatross', 'seagull', 'dove', 'crane', 'flamingo', 'pelican', 'stork', 'ostrich', 'emu', 'turtle', 'tortoise', 'plankton', 'dolphin', 'whale', 'shark', 'seal', 'squid', 'octopus', 'crab', 'lobster', 'tiger', 'wolf', 'bear', 'lion', 'leopard', 'cheetah', 'jaguar', 'elephant', 'skunk', 'anteater', 'hippopotamus', 'alligator', 'crocodile', 'walrus', 'stingray', 'starfish', 'seahorse', 'weasel', 'orangutan', 'gorilla', 'baboon', 'fox', 'hummingbird', 'woodpecker', 'coyote', 'javelina', 'scorpion', 'tarantula', 'rhino', 'cockroach', 'cricket', 'bull',
'The Princess Bride', 'Donnie Darko', 'Pulp Fiction', 'Coraline', 'The Shining', 'My Neighbor Totoro', 'The Wizard of Oz', 'The Godfather', 'Gone with the Wind', 'The Sound of Music', 'Mary Poppins', 'Blade Runner', 'Die Hard', 'The Grinch', 'Christmas Vacation', 'Titanic', 'Forrest Gump', 'Grease', 'Back to the Future', 'Jaws', 'Psycho', 'E.T', 'Signs', 'The Village', 'Sleepy Hollow', 'John Wick', 'The Crow', 'Snowpiercer', 'Spirited Away', 'King Kong', 'Godzilla', 'Frankenstein', 'Scarface', '101 Dalmations', 'Mulan', 'The Black Cauldron', 'The Labyrinth', 'The Little Mermaid', 'The Lion King', 'Beauty and the Beast', 'Hercules', 'Aladdin', 'Pocahontas', 'Cinderella', 'The Aristocats', 'Lilo & Stitch', 'Lady and the Tramp', 'The Emperor\'s New Groove', 'Dumbo', 'Pirates of the Caribbean', 'Ratatouille', 'Bambi', 'Pinocchio', 'Jungle Book', 'Alice in Wonderland', 'Sweeney Todd', 'Edward Scissorhands', 'Corpse Bride', 'Addam\'s Family', 'Pride & Prejudice', 'Jurassic Park', 'Alien',
'golf', 'tennis', 'basketball', 'bowling', 'billiards', 'baseball', 'curling', 'football', 'soccer', 'rugby', 'hockey', 'skiing', 'snowboarding', 'motocross', 'bobsledding', 'diving', 'swimming', 'pole vaulting', 'shot put', 'table tennis', 'cycling', 'jogging', 'rock climbing', 'volleyball', 'rollerblading', 'skateboarding', 'bmx', 'boxing', 'fencing', 'horse racing', 'badminton', 'figure skating', 'surfing', 'rodeo', 'polo', 'rowing', 'archery', 'gymnastics', 'softball', 'racquetball', 'canoeing', 'lacrosse', 'weightlifting', 'karate', 'field hockey', 'judo', 'rafting', 'pickleball', 'shuffleboard', 'croquet', 'darts', 'water polo', 'paintball', 'airsoft', 'bungee jumping', 'skydiving', 'base jumping', 'roller derby', 'dodgeball', 'bouldering', 'wrestling', 'windsurfing', 'hang gliding', 'cheerleading', 'taekwondo',
'Grand Canyon', 'Mount Rushmore', 'Great Wall of China', 'Niagara Falls', 'Angel Falls', 'Eiffel Tower', 'Louvre Museum', 'Golden Gate Bridge', 'Colosseum', 'Machu Picchu', 'Statue of Liberty', 'Times Square', 'Taj Mahal', 'Central Park', 'La Sagrada Familia', 'Stonehenge', 'Buckingham Palace', 'Sistine Chapel', 'Alcatraz', 'Notre-Dame', 'Acropolis', 'Pike Place Market', 'Big Ben', 'Yellowstone', 'Yosemite', 'Navy Pier', 'Sydney Opera House', 'Empire State Building', 'Tower of London', 'Pompeii', 'Pantheon', 'Leaning Tower of Pisa', 'Roman Forum', 'La Rambla', 'Zion', 'White House', 'Monument Valley', 'Hoover Dam', 'Space Needle', 'Old Faithful', 'Millenium Park', 'Great Pyramid of Giza', 'Chacchoben', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto',
'helicopter', 'train', 'bus', 'airplane', 'taxicab', 'ferry', 'trolley', 'monorail', 'subway', 'rickshaw', 'horseback', 'motorcycle', 'bicycle', 'unicycle', 'tricycle', 'dirt bike', 'ATV', 'blimp', 'hot air balloon', 'zipline', 'rowboat', 'canoe', 'speedboat', 'sailboat', 'raft', 'dinghy', 'kayak', 'paddleboard', 'cruise ship', 'jetpack', 'space shuttle', 'rocket', 'submarine', 'Toyota', 'Honda', 'Kia', 'Hyundai', 'Jeep', 'Hummer', 'Chrysler', 'Dodge', 'Ford', 'Chevrolet', 'Maserati', 'Subaru', 'Tesla', 'Range Rover', 'Mercedes', 'Lexus', 'Acura', 'GMC', 'Cadillac', 'Buick', 'Pontiac', 'Scion', 'Audi', 'Ferrari', 'Lamborghini', 'Nissan', 'Mazda', 'Mitsubishi', 'Infiniti', 'Volvo', 'Volkswagen', 'Jaguar', 'Porsche', 'Suzuki', 'Alfa Romeo', 'Fiat', 'Rolls-Royce', 'McLaren', 'Bentley'];
let currentWord;
let shownWords = [];
let checkAgain = true;
let orientationSet = false;

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
            clearInterval(timer);
        }
    }, 1000);
}

handleOrientation = (event) => {
    if (checkAgain && orientationSet) {
        if (event.gamma >= -50 && event.gamma <= -40) {
            checkAgain = false;
            nextWord(false);
            setTimeout(() => {
                checkAgain = true;
            }, 2000)
        } else if (event.gamma <= 50 && event.gamma >= 40) {
            checkAgain = false;
            nextWord(true);
            setTimeout(() => {
                checkAgain = true;
            }, 2000);
        }
    }
}

startTimer = () => {
    addOrientationEvent();
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
            shownWords.push({"word": currentWord, "correct": false});
            document.getElementById('word').innerHTML = '';
            showResults();
        }
    }, 1000);
}

addOrientationEvent = () => {
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation, false);
        setTimeout(() => {
            orientationSet = true;
        }, 2000);
    } else {
        document.getElementById('correct').style.display = 'inline-block';
        document.getElementById('pass').style.display = 'inline-block';
    }
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

nextWord = (correct) => {
    let audio;
    if (correct) {
        audio = new Audio('./ting.mp3');
    } else {
        audio = new Audio('./mirror.mp3');
    }
    audio.play();
    shownWords.push({"word": currentWord, "correct": correct});
    showWord();
}

showResults = () => {
    if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation, false);
    }
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
    orientationSet = false;
    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('playAgain').style.display = 'none';
    document.getElementById('results').innerHTML = '';
}