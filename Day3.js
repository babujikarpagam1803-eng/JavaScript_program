let person ={
name: " Usha",
age: 20

}

function details(city, course){
console.log("Name :", this.name)
console.log("age :", this.age)
console.log("City :","chennai")
console.log("Course :","Playwright")

}

// Call fun Syntax =  functionName.call(obj, arg1, arg2)
console.log("Call Fun")
details.call(person,"chennai","Banglr")

//  Apply fun Syntax =  functionName.apply(obj, [arg1, arg2])


console.log("Apply Fun")
details.apply(person,["HYD","MUMB"])

// // Bind fun Syntax =    let newFun =  functionName.bind(obj, arg1, arg2)
console.log("Bind Fun")
let result =details.bind(person,["Delhi","Pune"])
result()




