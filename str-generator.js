/**
 * List of function generating strings
 */

import { getRndChar} from "./utils.js";


/**
 * Fill a substr of a word with blank spaces
 * @param ele : Element
 * @param word : string
 * @param subWord : string
 * @returns string
 */
export function fillWithBlank(ele, word, subWord){
    const nbToFill = word.length - subWord.length;
    return subWord + genBlankStr(nbToFill);
}

export function fillWithChar(ele, word, subWord, char){
    const nbToFill = word.length - subWord.length;
    return subWord + genCharStr(nbToFill, char);
}

/**
 * Fill a substr of a word with random characters from a string
 * @param ele : Element
 * @param word : string
 * @param subWord : string
 * @param characters : string
 * @returns string
 */
export function fillWithRndChar(ele, word, subWord, characters){
    const nbToFill = word.length - subWord.length;
    return subWord + genRndCharStr(nbToFill, characters);
}

/**
 * Create a string with a number of blank spaces
 * @param number : number
 * @returns string
 */
export function genBlankStr(number){
    let res = ''
    for(let i = 0; i < number; i++){
        res += '&nbsp'; // &nbsp
    }
    return res;
}

/**
 * Create a string with a number of blank spaces
 * @param number : number
 * @param char
 * @returns string
 */
export function genCharStr(number, char){
    let res = ''
    for(let i = 0; i < number; i++){
        res += char; // &nbsp
    }
    return res;
}
/**
 * Create a string with random characters from a string.
 * @param number : number
 * @param characters : string
 * @returns {string}
 */
export function genRndCharStr(number, characters){
    let res ='';
    for(let i = 0; i < number; i++)
        res+= getRndChar(characters)
    return res;
}
