// RegEx are patterns of characters used for search and replacing characters.
// They return 

let text = "Hello are you doing fine"
let result = text.search(/hello/g)
console.log(result)

// The result should be -1 because the modifier g is case sensitive thus hello is not 
// found


let result2 = text.search(/hello/gi)
console.log(result2)

// result2 is 0, the first position of hello, gi- is not case sensitive