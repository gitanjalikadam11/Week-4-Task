class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  }
}

// Inheritance: Student extends Person
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  introduce() {
    console.log(
      `I am ${this.name}, ${this.age} years old, studying ${this.course}.`
    );
  }

  study() {
    console.log(`${this.name} is studying JavaScript.`);
  }
}

// Create objects
const person1 = new Person("Ram", 25);
const student1 = new Student("Gitanjali", 22, "Computer Science");

// Call methods
person1.introduce();
student1.introduce();
student1.study();
