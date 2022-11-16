//this inside global scope
this.name='lakshmi'
console.log(`hello ${window.name} inside global scope`)
//this inside function
var obj={
    name:'lakshmi',
    sayHi: function(){
        console.log(`hello ${this.name} inside function`)
    }
}
obj.sayHi()
//this inside innerfunction
var obj={
    name:'lakshmi'
}
    var sayHi=function(){
        
        const sayHello=()=>{
            console.log(`hello ${this.name} inside innerfunction`)
        }
        sayHello.call(this)
    }
sayHi()

//this inside method
var obj={
    name:'lakshmi',
    sayHi(){
        console.log(`hello ${this.name} inside method`)
    }
}
obj.sayHi()
//this insideconstructor
let Student=function(name){
    this.name=name
}
Student.prototype.sayHi=function(){
    console.log(`hello ${this.name} inside constructor`)
}
var lakshmi= new Student('lakshmi')
lakshmi.sayHi()

//this inside class
class Person{
    constructor(name){
        this.name=name
    }
    sayHi(){
        console.log(`hello ${this.name} inside class`)
    }

}
var lakshmi=new Person('Lakshmi')
lakshmi.sayHi()