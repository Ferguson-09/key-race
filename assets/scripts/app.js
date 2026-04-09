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
    #hits;
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

startBtn.addEventListener('click', () => {
    if (clock) {
        clearInterval(clock);
    }

    time = 100;
    startBtn.innerHTML = 'Restart Game';

    clock = setInterval(() => {
        time--;
        timer.textContent = time;

        if (time <= 0) {
            clearInterval(clock);
            timeTxt.innerHTML = 'Game Over';
            display.innerHTML = '';
        }
    }, 100);

    function greet(){
        let max = 90;
        let randomNum = Math.floor(Math.random() * max);
        let word = words[randomNum];
        let arr = word.split('');
        let text = '';
        for (let i = 0; i < arr.length; i++){
            text = text.concat(`<span>${arr[i]}</span>`)
        }
        display.innerHTML = `${text}`
    }

    greet();
    
})




