const textEl = document.querySelector("#greetings");
const original = JSON.parse(textEl.getAttribute("data-greeting"));

const first = "Hello";
const rest = original.filter(text => text !== first);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(rest);

const greetings = [first, ...rest];

let texts = greetings;

let index = 0;
let charIndex = 0;
let delta = 500;

let start = null;
let isDeleting = false;

function type(time){
    window.requestAnimationFrame(type);
    if(!start) start = time;
    let progress = time - start;

    if(progress > delta) {
        let greetings = texts[index];
        if(!isDeleting) {
            textEl.innerHTML = greetings.slice(0, ++charIndex);
            delta = 500 - Math.random() * 400;
        } else{
            textEl.innerHTML = greetings.slice(0, charIndex--)
        }

        start = time;

        if(charIndex == greetings.length) {
           isDeleting = true;
           delta = 200;
           start = time + 1200; 
        }

        if(charIndex < 0) {
            isDeleting = false;
            start = time + 200;
            index = ++index % texts.length
        }
    }
}


window.requestAnimationFrame(type);