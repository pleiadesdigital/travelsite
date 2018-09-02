var $ = require('jquery');
//var Person = require('./modules/Person'); node.js way
import Person from './modules/Person'; // native JS way

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes!");
  }
}

var john = new Person("John Doe", "color");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();
