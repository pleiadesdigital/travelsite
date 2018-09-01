function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color + ".");
  }
}

var john = new Person("John Doe", "color");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
