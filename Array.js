// let number =[1,2,"U","jjj",true]
// console.log(number)
// console.log(number[0])
// console.log(number[1])
// console.log(number[2])
// console.log(number[3])
// console.log(number[4])
// console.log(number.length)


// // loop
// for(i=0;i<number.length;i++){
//     console.log("for loop",number[i])

// }
// //enhanced for loop -easy
// for(let box of number){
//     console.log("Enhanced loop",box)
// }
let n= [100,2.5,true]
//replace
n[1] = "Test"   // o/p - [ 100, 'Test', true ]
console.log(n)

//push - add last
n.push("Last")
console.log(n) // o/p - [ 100, 'Test', true, 'Last' ]

//unshift - add 1st
n.unshift("First")
console.log(n) // o/p - [ 'First', 100, 'Test', true, 'Last' ]

//pop - remove 1st
n.pop()
console.log(n) // o/p - [ 'First', 100, 'Test', true ]

//shift - revove last
n.shift()
console.log(n) // o/p - [ 100, 'Test', true ]





