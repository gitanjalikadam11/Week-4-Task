class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name}.`);
    console.log(`I am ${this.age} years old.`);
  }
}

// Student inherits from Person
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}.`);
  }
}

// Create a Student object
const student1 = new Student("Gitanjali", 22, "Computer Science");

// Use inherited and child-class methods
student1.introduce();
student1.study();
