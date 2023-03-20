// 2 types of datatypes - primitive(7types) and non primitive(1 type)
/* 
N = null 
N = number
S = symbol 
S = string 
B = boolean
B = bigint 
U = undefined 
*/ 

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js (same as dictnory in pyhthon)
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])