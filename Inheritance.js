// Grand Parent to Father
class Grandparent{
Grandparents(){
    console.log("Grand Parent property")
}
}

class Father extends Grandparent
{
Fathers(){
    console.log(" Parent property")
}
}

class Baby extends Father
{
Babys(){
    console.log(" Grand Father and father property got inherited")
}
}
let call = new Baby()
call.Grandparents()
call.Fathers()
call.Babys()