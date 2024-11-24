/**
 * Repeats a string a given number of times with options for delimiter, truncation, and padding.
 *
 * @param {string} str - The string to repeat.
 * @param {number} [count = 0] - The number of repetitions.
 * @param {string} [delimiter=''] - The string to insert between repetitions.
 * @param {string} [padding=''] - The padding to add before/after the repeated string.
 * @returns {string} The repeated string, potentially with delimiter, truncation, and padding.
 */

function repeatString(str, count = 0, delimiter = '', padding = '') {

    if(typeof str != "string" || typeof count != "number" || count <= 0 || str.length == 0){
        return '';
    }
    
    delimiter = delimiter.toString();
    padding = padding.toString();
    count = Math.floor(count);

    let result = padding;

    for(let i=0; i<count; i++){
        if(!(i == count-1)){
            result += str + delimiter;
        }else{
            result += str;
        }
    }

    return result;

}

module.exports = repeatString;