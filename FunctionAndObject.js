let nam= "Global"
function Welcome(){
    let nam= "Usha"
console.log(nam)
//
}
Welcome()

// Chain Fun
let d=100
function outer(){
    let e=200
    function inner(){
console.log("Chain Fun",e+d)

    }
    inner()

}
outer()




//Obj with fun
let calculator ={a:10,b:20,
    addition: function(){
        return this.a+ this.b
    },
    subraction: function(){

        return this.a - this.b
    }
}
console.log(calculator.addition())
console.log(calculator.subraction())








