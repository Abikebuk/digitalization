# Digitalization Script  
![](https://s7.gifyu.com/images/Digitalize-1.10.gif)

Javascript text animation themed on digital/glitched text.

## Features
* Asynchronous animation. 
* Every word is print character by character from left to right.
* The animation will always have the size of the word and replace the space of the word that have yet not been print. 
* Speed of animation is customizable.
* Multiples modes : 
    * linear : Random characters are print on the next word's character's place to be print. 
    * linear_full : Randoms characters are print on each word's character that have not been print yet.
    * countdown : A number will be print on the next word's characters to be print.
    * countdown_right : A number will be print at the place of the rightest characters of the word.
    
## Installation  
Install the digitalization package.
```
npm install @abikebuk/digitalization
```
import the script.
```js
import { digitalizeLinear, digitalizeLinearFull, digitalizeCountdown, digitalizeCountdownRight } from '@abikebuk/digitalization';
```

Use one of the digitalization function
```
digitalizeLinear(element, word, speed, nbIteration, skipBlank, blankChar, characters);
digitalizeLinearFull(element, word, speed, nbIteration, skipBlank, blankChar, characters);
digitalizeCountdown(element, word, speed, skipBlank, blankChar);
digitalizeCountdownRight(element, word, speed, skipBlank, blankChar);
```
Arguments explanation :  

| Variable | Type | Optional | comment |
|----------|------|----------|---------|
| element | Element| No | Element on the DOM (innerHTML has to be accessible)|
| word | string | No | word to print |
| speed | number | Yes | The speed of each iteration of the animation.|
| skipBlank | boolean | Yes | If true will ignore blank spaces (only the blank space created by clicking on the spacebar button)|
| blankChar | string | Yes | Char printed at the place of each character of the word which have not been print yet |
| characters | string | Yes | Set of character which are print randomly in linear modes.

## example directory
The example directory contains the code used to make the gif on the top of the readme.

## TODO
* Blank space filled with string on top of the char filling.
* Function names change.
* Support for non monospaced font.
* Not left to right modes (reverse / random)? 
* More modes?

## To Fix
* Timing is off between linear and countdown modes
## Author  
Abikebuk (Rettana Muon) : <rettana.muon@gmail.com>
