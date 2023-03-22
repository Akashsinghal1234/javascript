// array methods 

// to convert an array to string

let buu = [1,4,2,3,5]
let b = num.toString
console.log(b)

let c = num.join("_")
console.log(c)

num.pop()
console.log(num)

num.push(7)
console.log(num)

let r = num.shift //removes an element from start on array
console.log(r)


let f = num.unshift //addes an element from start on array
console.log(r)

delete num[2]
console.log(num)//the length of array does not effect 

let aka = [1,2,3]
let sh = [4,5,6]
let newarr = aka.concat(sh)
console.log(newarr)

 
let allb = [1, 2, 3, 4, 5, 6, 7, 8, 9]

 let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
 let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

console.log(num.length)

delete num[0]

console.log(num.length)

let newArray = num.concat(num_more, num_even_more)
  console.log(newArray)
  console.log(num, num_more)

// sort method

let compare = (a, b)=>{

    return b - a

}

let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]

num.sort(compare)
 num.reverse()
 console.log(num)

// Splice and Slice
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229]

let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)

console.log(num)

console.log(deletedValues)


let newN1um = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)


