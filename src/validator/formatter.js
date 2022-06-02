// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler


const trim = function(){
        let nam = "  Anil kumar  ";
        console.log('result after trimming is :=>' + nam.trim());
}

const changetoLowerCase = function(){
        let nAm = "CHANGES THE CASE OF THE STRING TO LOWER";
        console.log("Lowercase ==>" +" "+ nAm.toLowerCase());
 }

const changeToUpperCase = function(){
        let uppe = "changes the case of the string to upper case";
        console.log("Uppercase ==>" + " "+ uppe.toUpperCase());
}

module.exports.formatters = trim
module.exports.lower = changetoLowerCase
module.exports.upper = changeToUpperCase

