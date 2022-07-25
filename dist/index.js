"use strict";
//basic types
let id = 5;
let firstName;
firstName = 'Abdu';
let isCompleted = true;
let x = 5;
//arrays
let numbers = [1, 4, 3];
let stringTypes = ['hello', 'hi'];
//tuples
let person = [1, 'Person 1', {
        name: 'Abdulrahman',
        age: 20
    }];
let employee;
employee = [
    [1, 'Ali'],
    [2, 'Saleh'],
    [3, 'Mosa\'ad']
];
//union
let anyId;
anyId = 'hello';
anyId = 3;
anyId = true;
// console.log(anyId)
//enum
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Saturday"] = 1] = "Saturday";
    weekDays["Sunday"] = "Sunday";
})(weekDays || (weekDays = {}));
const user = {
    id: 1,
    name: 'Abdu'
};
//type assertion
let anyTypeId = 1;
let userId = anyTypeId;
function addNumbers(x, y) {
    return x + y;
}
const user2 = {
    id: 1,
    name: 'Abood'
};
//classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const person1 = new Person(1, 'Ali');
// console.log(person1.register())
//inheritance
//subClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'Aboodah', 'Project Manager');
console.log(emp.register());
