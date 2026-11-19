// function getdata(){
//     return Promise.resolve("hello")
// }
// getdata().then(function(r){
//     console.log(r)
// })

// // Catch --> to print rejected
// let pp = new Promise(function(resolve, reject){
// reject("Rejected")
// })
// pp.catch(function(rs){
// console.log(rs)

// })

// async function nam() {
//     let as = await Promise.resolve("Async Data")
//     console.log(as)
// }
// nam()


let kk = new Promise (function(Resolve, reject){
Resolve("Resolved data")
})
async function  demo() {
    let gg = await kk
    console.log(gg)
    
}
demo()

