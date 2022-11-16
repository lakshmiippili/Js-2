class Student{
    static count=0
    constructor(name,age,phone,marks){
        this.name=name
        this.age=age
        this.phone=phone
        this.marks=marks
        Student.count++
    }
    isEligible(){
        if(this.marks>40){
            console.log('eligilble for college')
        }else{
            console.log('not eligible for college')
        }
    }
    static studentsCreated(){
        console.log(this.count)
    }
    printDetails(){
        console.log(`${this.name}:${this.age}:${this.phone}:${this.marks}`)
    }
}
var student1= new Student('lakshmi',26,123,44)
student1.printDetails()
var student2=new Student('mani',31,234,34)
Student.studentsCreated()
var student3=new Student('kumar',32,345,50)
var student4=new Student('bhavani',27,456,72)
var student5= new Student('venkat',29,567,65)
student1.isEligible()
student2.isEligible()
Student.studentsCreated()