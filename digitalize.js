/**
 * This script create a 'digital' animation on a specific element in the DOM.
 */

/** Setting up the list of characters to choose randomly */
const letters = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ0123456789';
const symbols = '$%*#{}[]!§?/+-"~µù.;,£€|¹°²]~#¹^'//'$%*#{}[]!§?/+-"~µù.;,£€<>';
const charList =  letters + symbols;

/** List of the functions */

/**
 * Create a sleep time
 * @param ms : number, time of sleep in ms
 * @returns void
 */
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Create a string with a number of blank spaces
 * @param number : number
 * @returns string
 */
function genBlankStr(number){
    let res = ''
    for(let i = 0; i < number; i++){
        res += '&nbsp'; // &nbsp
    }
    return res;
}
/**
 * Create a string with random characters from a string.
 * @param number : number
 * @param characters : string
 * @returns {string}
 */
function genRndCharStr(number, characters){
    let res ='';
    for(let i = 0; i < number; i++)
        res+= getRndChar(characters)
    return res;
}
/**
 * Fill a substr of a word with blank spaces
 * @param ele : HTMLElement
 * @param word : string
 * @param subWord : string
 * @returns string
 */
function fillWithBlank(ele, word, subWord){
    const nbToFill = word.length - subWord.length;
    return subWord + genBlankStr(nbToFill);
}
/**
 * Fill a substr of a word with random characters from a string
 * @param ele : HTMLElement
 * @param word : string
 * @param subWord : string
 * @param characters : string
 * @returns string
 */
function fillWithRndChar(ele, word, subWord, characters){
    const nbToFill = word.length - subWord.length;
    return subWord + genRndCharStr(nbToFill, characters);
}
/**
 * Gives a random char from a string
 * @param characters : string
 * @returns string, a character
 */
function getRndChar(characters){
    let rnd = Math.floor(Math.random() * characters.length);
    return characters.split('')[rnd];
}
/**
 *
 * @param ele : HTMLElement
 * @param i : number, the position in the word
 * @param word, word to digitalize
 * @param speed, speed of the animation ( in ms )
 * @param mode, mode to use
 * @param characters, characters to use
 * @returns {Promise<void>}
 */
async function generateDigitalization(ele, i, word, speed, mode, characters) {
    const substr = word.substr(0, i);
    switch (mode) {
        case 'full' :
            ele.innerHTML = fillWithRndChar(ele, word, substr, characters);
            break;
        case 'linear' :
            ele.innerHTML = fillWithBlank(ele, word, substr + getRndChar(characters));
            break;
        case 'countdown' :
            const size = word.length - substr.length - 1;
            const sizeStr = size.toString()
            ele.innerHTML = fillWithBlank(ele, word, substr + sizeStr);
            break;
        default :
            console.log("Warning : Mode is not recognized.")
    }
    await sleep(speed);
}
/**
 * Create a digital animation on an element.
 * @param ele : HTMLElement, an element in the dom.
 * @param word : string, the string that shows up in the end of the animation.
 * @param speed : number, the speed of each iteration (in ms) of the animation.
 * @param nb_rnd : number, the number of iteration for each characters of the animation.
 * @param mode : 'full'|'linear'|'countdown', the mode of the animation.
 * @param skip_blank : boolean
 * @param characters : string
 * @returns void
 */
export async function digitalize(ele, word, speed  = 20, nb_rnd = 8, mode = "linear", skip_blank = false, characters = charList) {
    console.log("[ DIGITALIZATION OF : " + word + " ]")
    console.log("Processing Digitalization...");
    let i = 0;
    for (const letter of word) {
        if (!skip_blank || letter !== " ") {
            //console.log("Generating character [ " + letter + " ] in iteration [ " +  i + " ] ...");
            for (let j = 0; j <= nb_rnd  ; j++) {
                await generateDigitalization(ele, i, word, speed, mode, characters);
            }
            await generateDigitalization(ele, i, word, speed, mode, characters);

        } else // If skip_blank...
            ele.innerHTML = fillWithBlank(ele, word, word.substr(0, i));
        i++;
    }
    ele.innerHTML = word;
    console.log("DIGITALIZATION OF [" + word + "] COMPLETE.")
}
