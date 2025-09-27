// Defining a Class
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
// Method inside a class
introduce() {
console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}
}
// Inheritance: Student extends Person
class Student extends Person {
constructor(name, age, course) {
super(name, age); // call the parent constructor
this.course = course;
}
// Method specific to Student
study() {
console.log(`${this.name} is studying ${this.course}.`);
}
}
// Create objects (instances) of the classes
const person1 = new Person("Preye", 25);
const student1 = new Student("Caesar", 20, "Mass Communication");
// Use methods
person1.introduce();
student1.introduce();
student1.study();