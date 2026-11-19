class School_1{
Student(){
console.log("Student 1")
}
}
class School_2 extends  School_1{
    Student(){
        super.Student()
        console.log("Student 2")

    }
}
let SS = new School_2()
SS.Student()

//Encapsulation private = #, protected = _
class third{
#mark =100           // Private 
Student(){
    console.log(this.#mark)
}
}
let S1 = new third()
S1.Student()
