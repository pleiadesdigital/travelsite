class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hello there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

// module.exports = Person; node.js way
export default Person; // native JS way
