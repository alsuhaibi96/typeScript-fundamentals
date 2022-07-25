//basic types
let id:number =5
let firstName:string
firstName='Abdu'
let isCompleted:boolean=true
let x:any =5



//arrays
let numbers:number[]=[1,4,3]
let stringTypes:string[]=['hello','hi']




//tuples
let person:[number,string,object]=[1,'Person 1',{
    name:'Abdulrahman',
    age:20
}]

let employee:[number,string][]

employee=[
    [1,'Ali'],
    [2,'Saleh'],
    [3,'Mosa\'ad']

]



//union
let anyId:string|number|boolean
anyId='hello'
anyId=3
anyId=true
// console.log(anyId)


//enum

enum weekDays{
    Saturday=1,
    Sunday='Sunday'
}
// console.log(weekDays.Saturday)



//objects
type User={
    id:number,
    name:string
}
const user:User={
    id:1,
    name:'Abdu'
}


//type assertion
let anyTypeId:any =1
let userId=<string>anyTypeId


function addNumbers(x:number,y:number):number{
    return x+y;
}

// console.log(addNumbers(3,4))



//interfaces
interface userInterface{
    id:number,
    name:string,
    age?:number
}

const user2:userInterface={
    id:1,
    name:'Abood'
}


//interface and arrow functions
interface mathFunctions{
    (x:number,y:string):number
}

// const summation1:mathFunctions=(x:number,y:number):number=>x+y


//person interface
interface personInterface{
    id:number
    name:string
    register():string
}


//classes
class Person implements  personInterface {
    id:number
    name:string

    constructor(id:number,name:string){
        this.id=id,
        this.name=name
    }
    register(){
        return `${this.name } is registered`
    }

    
}
const person1=new Person(1,'Ali');
// console.log(person1.register())


//inheritance
//subClass
class Employee extends Person {
position:string

constructor(id:number,name:string,position:string){
    super(id,name)
    this.position=position
}

}


 const emp=new Employee(2,'Aboodah','Project Manager');

 console.log(emp.register())