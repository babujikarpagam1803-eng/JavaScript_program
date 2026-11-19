//increment
for(let i =0; i<=4;i++){
    console.log("Icrement loop",i)
}
//decrement
for(let i=10;i>=1;i--){
    console.log("Decrement loop",i)
}
let k=1
//while
while(k<10){
    console.log("while loop",k)
k++
}
//Ternary operetor
let age =10

let result =(age>8)?"eligible":"Not eligeble"
console.log("Ternary  operetor",result)
//for loop with break

   for(let i =0; i<=4;i++){
   if(i==3)
   {
    break
   }
   console.log("Break loop",i)
}
//for loop with continue
welcome()
for(let i =0; i<=4;i++){
    if(i==3)
    {
     continue
    }
    console.log("Continue",i)
 }

 //Function --> void
 function welcome(){
console.log("function called")

 }
//function with parameter -- void

function add(a,b){
console.log("function with parameter add",a+b)
}
add(100,500)

// function without return

function withoutReturn(x,y){

console.log('withoutReturn', x*y) 

}
withoutReturn(3,4)

// funtin with retur --> can acces ouside funtion

function withReturn(x,y){
return x*y
}
let rs = withReturn(5,6)
console.log("withReutrn",rs)

//for each with arrow fun
let forloop = [100, 200, 300];

forloop.forEach(n => console.log("Arrow function", n));