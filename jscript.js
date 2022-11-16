"use strict"
let getA = (a)=> a
console.log(getA(5))

let square= (a)=>{ return a*a}
console.log(square(5))

var a=4
let sq=()=>{ return a*a}
console.log(sq())

let mul = (a,b)=>{ return a*b}
console.log(mul(5,2))

var x= function(){
    this.val = 1
    setTimeout(()=>{
        this.val++
        console.log(this.val)},1)
}
var y= new x()