// const arr = [
//   {
//     name: 'Udhay',
//     designation: 'developer'
//   },
//   {
//     name: 'Poo',
//     designation: 'developer'
//   }
// ]

// const arr2 = [1, 2, 3, 4];

// const result = arr2.reduce((acc, val) => acc + val)
// console.log(result);

// arr.find(val => val.designation === 'developer')

// Closures
function createName(name) {
  var person = name;
  
  this.getName = function () {
    return person;
  }
}

var name = new createName('Udhay');
console.log(name.getName());

// Array Sorting
const arr = [5,2,9,4,5];
const sorter = (e1, e2) => e2 - e1;
arr.sort(sorter);
console.log(arr);

const marks = [90, 100, 50, 30];

// map
const marksOutOfFifty = marks.map((mark) => mark/2);
console.log(marksOutOfFifty);

// forEach
marks.forEach(mark => console.log(mark));

// filter
const passMarks = marks.filter(mark => mark >= 50);
console.log('passMarks', passMarks);

// find
const firstPassMark = marks.find(mark => mark >= 50);
console.log('firstPassMark', firstPassMark);

// some
const classPerformance = marks.some(mark => mark > 50);
console.log(classPerformance);

// every
const classPerformanceEvery = marks.every(mark => mark > 50);
console.log(classPerformanceEvery);

// reduce
const totalMarks = marks.reduce((total, currentValue) => total+currentValue);
console.log('totalMarks', totalMarks);

// Arrow function
const car = {
  model: 'Ecosport',
  manufacturer: 'Ford',
  getCar: function() {
    return `${this.manufacturer} ${this.model}`
  }
}

car.getCar();

const carModels = {
  models: ['i10', 'i20'],
  manufacturer: 'Hyundai',
  getModels: function() {
    return this.models.map((model) => {
      return this.manufacturer;
    })
  }
}

 carModels.getModels();

// Arrow function
const pets = {
  names: ['jeffy', 'thomas'],
  owner: 'Udhay',
  desc: function() {
    return this.names.map(function(pet) {
      return `${this.owner} is the owner of ${pet}`
    }.bind(this))
  }
}

pets.desc();


// Spread operator
const originalObj = {name: 'udhay', designation: 'dev'};

const cloneObj = {...originalObj};
console.log(cloneObj);

const printArray = (num1, num2) => {
  console.log(num1);
}

const numbers = [1,2,3,4];
printArray(...numbers);

// Promise
const promise = new Promise((resolve, reject) => {
  const value = true;
  if (value) {
    resolve('Value is true')
  } else {
    reject('Value is false')
  }
});

promise.then(res => {
  console.log(res);
}).catch(err => console.log(err));

// Array concat
const a1 = [1,2,3]
const new1 = a1.concat([4,5,6,7]);
console.log(new1);

function createPerson(name) {
  let person = name;
  
  this.getName = function() {
    return person;
  }
}

let newperson = new createPerson('ajj');
console.log(newperson.getName());

// ES6 Variables
function printVariable() {
  console.log('variable',a);
  let a = 10;
}
printVariable();