// Inheritance

//single inheritance
// class Organisation{
//     constructor(employeeName,empId,designation,salary){
//         this.employeeName=employeeName
//         this.empId=empId
//         this.designation=designation
//         this.salary=salary
//     }
//     annualSal(){
//         return (this.salary*12)/100000+" lpa"
//     }
// }
// class Faculty extends Organisation{
//     constructor(employeeName,empId,designation,salary,skills,classes){
//         super(employeeName,empId,designation,salary)
//         this.skills=skills
//         this.classes=classes
//     }
// }
// let data=new Faculty("Chandu",101,"Developer",50000,"java,sql,jdbc,web,hibernate,spring,springboot",2)
// console.table(data)
// console.log(data.annualSal());

//Multiple Inheritance-not supports in javascript
class Organisation{
    constructor(employeeName,empId,designation,salary){
        this.employeeName=employeeName
        this.empId=empId
        this.designation=designation
        this.salary=salary
    }
    annualSal(){
        return (this.salary*12)/100000+" lpa"
    }
}
class Faculty extends Organisation{
    constructor(employeeName,empId,designation,salary,skills,classes){
        super(employeeName,empId,designation,salary)
        this.skills=skills
        this.classes=classes
    }
}
class Mentor extends Organisation{
}
class Mentor extends Faculty{
}
let data=new Mentor("Chandu",101,"Developer",50000,"java,sql,jdbc,web,hibernate,spring,springboot",2)//Identifier 'Mentor' has already been declared
console.table(data)
console.log(data.annualSal());

