/**
 * This script create a 'digital' animation on a specific element in the DOM.
 */
import {sleep} from "./utils.js";
import {fillWithBlank} from './str-generator.js';
import {countdown, countdown_right, linear, linear_full} from './modes.js'


/** Setting up the list of characters to choose randomly */
const letters = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ0123456789';
const symbols = '$%*#{}[]!§?/+-"~µù.;,£€|¹°²]~#¹^'//'$%*#{}[]!§?/+-"~µù.;,£€<>';
const charList =  letters + symbols;

/** Core functions of Digitalize */

/**
 * Core function of Digitalize. Create a digital animation on an HTMLElement.
 * @param ele : Element an element in the dom.
 * @param word : string, the string that shows up in the end of the animation.
 * @param speed : number, the speed of each iteration (in ms) of the animation.
 * @param nb_rnd : number, the number of iteration for each characters of the animation.
 * @param mode : 'linear'|'linear_full'|'countdown'|'countdown_right', the mode of the animation.
 * @param skip_blank : boolean
 * @param blankChar : string
 * @param characters : string
 * @returns void
 */
export async function digitalize(
    ele,
    word,
    speed  = 20,
    nb_rnd = 8, mode = "linear",
    skip_blank = false,
    blankChar= '&nbsp',
    characters = charList) {
    console.log("[ DIGITALIZATION OF : " + word + " ]")
    console.log("Processing Digitalization...");
    let i = 0;
    for (const letter of word) { // For each letters of the word...
        if (!skip_blank || letter !== " ") { // if not skip blank
            for (let j = 0; j <= nb_rnd  ; j++)
                await generateDigitalization(ele, i, word, speed, mode, blankChar, characters);
        } else // If skip_blank, do nothing on this letter
            ele.innerHTML = fillWithBlank(ele, word, word.substr(0, i));
        i++;
    }
    ele.innerHTML = word;
    console.log("DIGITALIZATION OF [" + word + "] COMPLETE.")
}

/**
 * Generate the next iteration of Digitalize
 * @param ele : Element
 * @param i : number, the position in the word
 * @param word : string, word to digitalize
 * @param speed : number, speed of the animation ( in ms )
 * @param mode : string, mode to use
 * @param blankChar : string
 * @param characters : string, characters to use
 * @returns {Promise<void>}
 */
async function generateDigitalization(ele, i, word, speed, mode, blankChar, characters) {
    const substr = word.substr(0, i);
    switch (mode) {
        case 'linear' :               linear(ele, word, substr, blankChar, characters); break;
        case 'linear_full' :          linear_full(ele, word, substr, characters); break;
        case 'countdown' :            countdown(ele, word, substr, blankChar); break;
        case 'countdown_right' :      countdown_right(ele, word, substr, blankChar); break;
        default :                     console.log("Warning : Mode is not recognized.")
    }
    await sleep(speed);
}
