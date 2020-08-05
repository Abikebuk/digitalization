# Digitalization Script  
![](https://s7.gifyu.com/images/Digitalize-1.10.gif)

Javascript text animation themed on digital/glitched text.
npm 
## Installation  
Install the digitalization package.
```
npm install @abikebuk/digitalization
```
import the script.
@TODO

Use the digitalize function
```
digitalize(
    e : Element,            // The DOM element targetted
    word : string           // Any string to print
    speed : number          // The speed of each animation iteration
    nb_iteration : number   // The number of iteration
    skip_blank : boolean    // If true, the script will skip any blank spaces (only the character " " that is made by the spacebar)
    blank_char : string     // Each character that has not been print will be replaced by this blank_char
    characters : string     // The random character are printed from this list of characters.
)
```
## Features
* Every word is print character by character from left to right.
* The animation will always have the size of the word and replace the space of the word that have yet not been print. 
* Speed of animation is customizable.
* Multiples modes : 
    * linear : Random characters are print on the next word's character's place to be print. 
    * linear_full : Randoms characters are print on each word's character that have not been print yet.
    * countdown : A number will be print on the next word's characters to be print.
    * countdown_right : A number will be print at the place of the rightest characters of the word.
    
## example directory
The example directory contains the code used to make the gif on the top of the readme.

## TODO
* Sub functions for digitalize. There is way too much arguments.
* Blank space filled with string on top of the char filling.
* Function names change.
* More modes?

## Author  
Abikebuk (Rettana Muon) : <rettana.muon@gmail.com>
