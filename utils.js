/**
 * List of utility functions
 */

/**
 * Create sleep time
 * @param ms : number, time of sleep in ms
 * @returns Promise<void>
 */
export function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Gives a random char from a string
 * @param characters : string
 * @returns string, a character
 */
export function getRndChar(characters){
    let rnd = Math.floor(Math.random() * characters.length);
    return characters.split('')[rnd];
}


