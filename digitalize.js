/**
 * This script create a 'digital' animation on a specific element in the DOM.
 */
import {sleep} from "./utils.js";
import {fillWithBlank} from './str-generator.js';
import {countdown, countdown_right, linear, linear_full} from './modes.js'


/** Default params */
const letters = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ0123456789';
const symbols = '$%*#{}[]!§?/+-"~µù.;,£€|¹°²]~#¹^'//'$%*#{}[]!§?/+-"~µù.;,£€<>';
const defaultCharacters =  letters + symbols;
const defaultSpeed = 20;
const defaultNbIterations = 8;
const defaultSkipBlank = false;
const defaultBlankChar = '&nbsp'
const defaultCountDownSpeed = defaultSpeed * defaultNbIterations;

/** Core functions of Digitalize */

/** Digitalize an element
 * Core function of Digitalize. Create a digital animation on an HTMLElement.
 * @param ele : Element an element in the dom.
 * @param word : string, the string that shows up in the end of the animation.
 * @param speed : number, the speed of each iteration (in ms) of the animation.
 * @param nbIterations : number, the number of iteration for each characters of the animation.
 * @param mode : 'linear'|'linear_full'|'countdown'|'countdown_right', the mode of the animation.
 * @param skipBlank
 * @param blankChar : string
 * @param characters : string
 * @returns void
 */
async function digitalize(
    ele,
    word,
    speed  = 20,
    nbIterations = 8,
    mode = "linear",
    skipBlank = defaultSkipBlank,
    blankChar= defaultBlankChar,
    characters = defaultCharacters) {
        return new Promise(resolve => resolve(digitalizeCore(ele, word, speed, nbIterations, mode, skipBlank, blankChar, characters)))
    }

/**
 * Core function of Digitalize. Create a digital animation on an HTMLElement.
 * @param ele : Element an element in the dom.
 * @param word : string, the string that shows up in the end of the animation.
 * @param speed : number, the speed of each iteration (in ms) of the animation.
 * @param nbIterations : number, the number of iteration for each characters of the animation.
 * @param mode : 'linear'|'linear_full'|'countdown'|'countdown_right', the mode of the animation.
 * @param skipBlank
 * @param blankChar : string
 * @param characters : string
 * @returns void
 */
async function digitalizeCore(
    ele,
    word,
    speed  = 20,
    nbIterations = 8,
    mode = "linear",
    skipBlank = defaultSkipBlank,
    blankChar= defaultBlankChar,
    characters = defaultCharacters) {
    console.log("[ DIGITALIZATION OF : " + word + " ]")
    console.log("Processing Digitalization...");
    let i = 0;
    for (const letter of word) { // For each letters of the word...
        if (!skipBlank || letter !== " ") { // if not skip blank
            for (let j = 0; j <= nbIterations  ; j++)
                await generateNextIteration(ele, i, word, speed, mode, blankChar, characters);
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
async function generateNextIteration(ele, i, word, speed, mode, blankChar, characters) {
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

/** Shortcut function of Digitalize **/

/**
 * Digitalize in ""Linear" mode
 * @param ele : Element
 * @param word : string
 * @param speed : number
 * @param nbIteration : number
 * @param skipBlank : boolean
 * @param blankChar : string
 * @param characters : string
 * @returns {Promise<void>}
 */
export async function digitalizeLinear(
    ele,
    word,
    speed = defaultSpeed,
    nbIteration = defaultNbIterations,
    skipBlank = defaultSkipBlank,
    blankChar = defaultBlankChar,
    characters = defaultCharacters
){ return digitalize(ele, word, speed, nbIteration, 'linear', skipBlank, blankChar, characters) }

/**
 * Digitalize in "Linear Full" mode
 * @param ele : Element
 * @param word : string
 * @param speed : number
 * @param nbIteration : number
 * @param skipBlank : boolean
 * @param characters : string
 * @returns {Promise<void>}
 */
export async function digitalizeLinearFull(
    ele,
    word,
    speed = defaultSpeed,
    nbIteration = defaultNbIterations,
    skipBlank = defaultSkipBlank,
    characters = defaultCharacters
){ return digitalize(ele, word, speed, nbIteration, 'linear_full', skipBlank, '', characters); }

/**
 * Digitalize in "Countdown" mode
 * @param ele : Element
 * @param word : string
 * @param speed : number
 * @param skipBlank : boolean
 * @param blankChar : string
 * @returns {Promise<void>}
 */
export async function digitalizeCountdown(
    ele,
    word,
    speed = defaultCountDownSpeed,
    skipBlank = defaultSkipBlank,
    blankChar = defaultBlankChar
){ return digitalize(ele, word, speed, 0, 'countdown', skipBlank, blankChar, ""); }

/**
 * Digitalize in "Countdown Right" mode
 * @param ele : Element
 * @param word : string
 * @param speed : number
 * @param skipBlank : boolean
 * @param blankChar : string
 * @returns {Promise<void>}
 */
export async function digitalizeCountdownRight(
    ele,
    word,
    speed = defaultCountDownSpeed,
    skipBlank = defaultSkipBlank,
    blankChar = defaultBlankChar
){ return digitalize(ele, word, speed, 0, 'countdown_right', skipBlank, blankChar, ""); }

