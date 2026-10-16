class Student {
  // Constructor initializes the object
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  // Method
  introduce() {
    console.log(`My name is ${this.name}.`);
    console.log(`My age is ${this.age}.`);
    console.log(`I am studying ${this.course}.`);
  }
}

// Create objects from the class
const student1 = new Student("Gitanjali", 22, "Computer Science");
const student2 = new Student("Ram", 23, "Information Technology");

// Call methods
student1.introduce();
student2.introduce();
