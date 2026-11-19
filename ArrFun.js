// 2 parameter - arrow fun
let s=(a,b) => console.log(a,b)
s(100,200)

// 1 parameter
let s1 = a=> console.log(a)
s1("Usha")


// Arroe fun with return

let re =(c,d)=>
{

    return c+d
}
console.log(re(1,2))

// without return
let ree = (a,b)=>{
let c = a+b
console.log(c)
}
let callRee=ree(1,5)
console.log(callRee)
