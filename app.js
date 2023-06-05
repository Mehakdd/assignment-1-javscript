// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = []
var speakButton = document.querySelector('#play_btn');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

// sleep function to wait for n seconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// attaching event listener to the play button
speakButton.onclick = async function() {
    output.innerHTML = ''
    for(let i = 0; i < textToSpeak.length; i++) {               /* loop through the array */
        textToSpeak[i].classList.add('highlight')               /* highlight the word */
        speakNow(textToSpeak[i].textContent);                   /* speak the word */
        output.innerHTML += textToSpeak[i].textContent + ' '    /* add the word to the output */
        await sleep(900)                                        /* wait for 900ms */
        textToSpeak[i].classList.remove('highlight')            /* remove the highlight */
    }
}

function attachClickEvent(button, list_arr) {
    button.onclick = function() {
        textToSpeak.push(list_arr[Math.floor(Math.random() * list_arr.length)])
    }
}

let nouns_1 = [...document.querySelector('#nouns_1').children]
let verbs = [...document.querySelector('#verbs').children]
let adjectives = [...document.querySelector('#adjectives').children]
let nouns_2 = [...document.querySelector('#nouns_2').children]
let places = [...document.querySelector('#places').children]

let nouns_1_btn = document.querySelector('#nouns_1_btn')
let verbs_btn = document.querySelector('#verbs_btn')
let adjectives_btn = document.querySelector('#adjectives_btn')
let nouns_2_btn = document.querySelector('#nouns_2_btn')
let places_btn = document.querySelector('#places_btn')
let rand_btn = document.querySelector('#rand_btn')
let clear_btn = document.querySelector('#clear_btn')

let output = document.querySelector('#output')

clear_btn.onclick = () => {
    textToSpeak = []
    output.innerHTML = ''
}

// random button
// on click, add a random word from each list to the textToSpeak array
rand_btn.onclick = () => {
    textToSpeak = []
    textToSpeak.push(nouns_1[Math.floor(Math.random() * nouns_1.length)])
    textToSpeak.push(verbs[Math.floor(Math.random() * verbs.length)])
    textToSpeak.push(adjectives[Math.floor(Math.random() * adjectives.length)])
    textToSpeak.push(nouns_2[Math.floor(Math.random() * nouns_2.length)])
    textToSpeak.push(places[Math.floor(Math.random() * places.length)])
}

// attaching event listeners to the buttons
attachClickEvent(nouns_1_btn, nouns_1)
attachClickEvent(verbs_btn, verbs)
attachClickEvent(adjectives_btn, adjectives)
attachClickEvent(nouns_2_btn, nouns_2)
attachClickEvent(places_btn, places)


