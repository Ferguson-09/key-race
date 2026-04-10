'use strict';

const startBtn = document.querySelector('.startBtn');
const display = document.querySelector('.given');
const input = document.querySelector('.input');
const timer = document.querySelectorAll('#time');
const timeTxt = document.querySelector('.timer-txt');
const restartBtn = document.querySelector('.restart');
const begin = document.querySelector('.countdown');
const overlay = document.querySelector('.overlay');
const tmr = document.querySelector('.timer');
const score = document.querySelector('.write-up');
const overOverlay = document.querySelector('.overlay-2');


const gameMusic = new Audio("./assets/media/background-music.mp3");
gameMusic.type = 'background-music/mp3';


const countdown = new Audio('./assets/media/3-second-countdown.mp3');
countdown.type = '3-second-countdown/mp3';

const gameOver = new Audio('./assets/media/game-over sound.mp3')
gameOver.type = 'game-over\ sound/mp3';

const menuMusic = new Audio('./assets/media/menu-music.mp3');
menuMusic.type = 'menu-music/mp3';

window.addEventListener('load', () => {
    menuMusic.play().catch(err => {
        console.log("Autoplay blocked:", err);
        });
    menuMusic.loop = true;
    });

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


let time;
let clock;
let beginTimer = 3;
let clockBegin;




startBtn.addEventListener('click', () => {
    menuMusic.pause();
    countdown.play();
    gameMusic.play();
    gameMusic.loop = true;

    scoreOne.hits = 0;
    input.disabled = false;

    time = 104;
    

    if (clock) {
        clearInterval(clock);
    }

    if(clockBegin) {
        clearInterval(clockBegin);
    }

    input.value = '';

    beginTimer = 3;
    startBtn.innerHTML = 'Restart Game';

    clockBegin = setInterval(() => {
        if (beginTimer > 0) {
            overlay.style.display = 'grid'
            input.disabled = true;
            tmr.style.display = 'none';
            begin.innerHTML = `${beginTimer}`;
            beginTimer--;
        }

        else if (beginTimer <= 0) {
            overlay.style.display = 'none';
            tmr.style.display = 'flex';
            input.disabled = false;
            clearInterval(clockBegin);
        }
    }, 1000);

    clock = setInterval(() => {
        time--;
        timeTxt.innerHTML = `Seconds Remaining: ${time}`
        if (time <= 0) {
            clearInterval(clock);
            clearInterval(clockBegin);
            display.innerHTML = '';
            timeTxt.innerHTML = 'Game Over';
            gameMusic.pause();
            gameOver.play();
            score.innerHTML =`
                <h2>Stats</h2>
                <p class="score">Score: ${scoreOne.hits}</p>
                <p class="score">Speed: ${(scoreOne.hits * 0.6).toFixed(2)} WPM</p>
            `;
            overOverlay.style.display = 'grid'
            input.disabled = true;
            input.value = '';
        }
    }, 1000);
    greet();  
})

const space = ' ';

input.addEventListener('input', () => {
    if (input.value.trim().toLowerCase() === words[randomNum]){
        greet();
        input.value = '';
        scoreOne.hits++;          
        scoreOne.percentage = scoreOne.hits;
        const rightMusic = new Audio('./assets/media/correct.mp3');
        rightMusic.play();
    }

    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => letter.classList.remove('right', 'wrong'));
    input.value = input.value.replaceAll(space, '');
    
    for(let i = 0; i < word.length; i++) {
        if(input.value[i].toLowerCase() === arr[i]) {
            letters[i].classList.add('right')
        } else {letters[i].classList.add('wrong')}
    }
});

restartBtn.addEventListener('click', () => {
    overOverlay.style.display = 'none';
    menuMusic.pause();
    countdown.play();
    gameMusic.play();
    gameMusic.loop = true;

    scoreOne.hits = 0;
    input.disabled = false;

    time = 104;
    

    if (clock) {
        clearInterval(clock);
    }

    if(clockBegin) {
        clearInterval(clockBegin);
    }

    input.value = '';

    beginTimer = 3;
    startBtn.innerHTML = 'Restart Game';

    clockBegin = setInterval(() => {
        if (beginTimer > 0) {
            overlay.style.display = 'grid'
            input.disabled = true;
            tmr.style.display = 'none';
            begin.innerHTML = `${beginTimer}`;
            beginTimer--;
        }

        else if (beginTimer <= 0) {
            overlay.style.display = 'none';
            tmr.style.display = 'flex';
            input.disabled = false;
            clearInterval(clockBegin);
        }
    }, 1000);

    clock = setInterval(() => {
        time--;
        timeTxt.innerHTML = `Seconds Remaining: ${time}`
        if (time <= 0) {
            clearInterval(clock);
            clearInterval(clockBegin);
            display.innerHTML = '';
            timeTxt.innerHTML = 'Game Over';
            gameMusic.pause();
            gameOver.play();
            score.innerHTML =`
                <h2 class='over'>Game Over</h2>
                <p class="score">Score: ${scoreOne.hits}</p>
                <p class="score">Speed: ${(scoreOne.hits * 0.6).toFixed(2)} WPM</p>
            `;
            overOverlay.style.display = 'grid'
            input.disabled = true;
            input.value = '';
        }
    }, 1000);
    greet();  
})