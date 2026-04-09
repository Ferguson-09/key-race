'use strics';

const startBtn = document.querySelector('.startBtn');
const display = document.querySelector('.given');
const input = document.querySelector('.input');
const timer = document.querySelector('#time');
const timeTxt = document.querySelector('.timer-txt');
const restartBtn = document.querySelector('.restart');

const gameMusic = new Audio("./assets/media/background-music.mp3")

class Score {
    #date;
    #hits = 0;
    #percentage;

    constructor(date, hits, percentage) {
        this.date = date;
        this.hits = hits;
        this.percentage = percentage
    }

    set date(date) {this.#date = date;}
    get date() {return this.#date}

    set hits(hits) {this.#hits = hits;}
    get hits() {return this.#hits}

    set percentage(percentage) {this.#percentage = percentage}
    get percentage() {return this.#percentage}
}

let time = 100;
let clock;

let words = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute', 'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle', 'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy', 'database', 'periodic', 'capitalism', 'abominable', 'component', 'future', 'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency', 'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician', 'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution', 'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music', 'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button', 'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework', 'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery', 'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow', 'keyboard', 'window']


let randomNum;
let word;
let arr;

function greet(){
        randomNum = Math.floor(Math.random() * words.length);
        word = words[randomNum];
        arr = word.split('');
        let text = '';
        for (let i = 0; i < arr.length; i++){
            text = text.concat(`<span class='letter'>${arr[i]}</span>`)
        }
        display.innerHTML = `${text}`
    };

    const scoreOne = new Score(new Date().toString(), 0, 0);

    input.disabled = true;

startBtn.addEventListener('click', () => {
    timeTxt.innerHTML = 'Seconds Remaining: <span id="time"></span>'

    scoreOne.hits = 0;
    input.disabled = false;

    if (clock) {
        clearInterval(clock);
    }

    input.value = '';

    time = 100;
    startBtn.innerHTML = 'Restart Game';

    clock = setInterval(() => {
        time--;
        timer.textContent = time;

        if (time <= 0) {
            clearInterval(clock);
            display.innerHTML = '';
            timeTxt.innerHTML = 'Game Over';
            input.disabled = true;
            alert (`Score: ${scoreOne.hits}`)
        }
    }, 100);
    greet();  
})

input.addEventListener('input', () => {
    if (input.value.trim() === words[randomNum]){
        greet();
        input.value = '';
        scoreOne.hits++;          
        scoreOne.percentage = scoreOne.hits;
    }

    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => letter.classList.remove('right', 'wrong'));
    
    for(let i = 0; i < word.length; i++) {
        if(input.value[i] === arr[i]) {
            letters[i].classList.add('right')
        } else {letters[i].classList.add('wrong')}
    }
})




