/**
 * List of functions applying the different modes of Digitalize
 */

import {fillWithRndChar} from "./str-generator.js";
import {getRndChar} from "./utils.js";
import {fillWithChar, genCharStr} from "./str-generator.js";

/**
 * linear function
 * @param ele : Element
 * @param word : string
 * @param substr : string
 * @param blankChar
 * @param characters : string
 */
export function linear(ele, word, substr, blankChar, characters){
    ele.innerHTML = fillWithChar(ele, word, substr + getRndChar(characters), blankChar);
}

/**
 * linear_full function
 * @param ele : Element
 * @param word : string
 * @param substr : string
 * @param characters : string
 */
export function linear_full(ele, word, substr, characters){
    ele.innerHTML = fillWithRndChar(ele, word, substr, characters);
}

/**
 * Countdown function
 * @param ele : Element
 * @param word : string
 * @param substr : string
 * @param blankChar : string
 */
export function countdown(ele, word, substr, blankChar){
    const size = word.length - substr.length - 1;
    const sizeStr = size.toString();
    ele.innerHTML = fillWithChar(ele, word, substr + sizeStr, blankChar);
}

/**
 * Countdown_right function
 * @param ele : Element
 * @param word : string
 * @param substr : string
 * @param blankChar : string
 */
export function countdown_right(ele, word, substr, blankChar){
    const size = word.length - substr.length - 1;
    const sizeStr = size.toString();
    ele.innerHTML = substr + genCharStr(word.length - substr.length - sizeStr.length, blankChar) + sizeStr;
}