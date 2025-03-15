let person1 = {
  name: "ravi",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

let person2 = {
  name: "satendra",
};

person1.greet();

person1.greet.call(person2);

console.log("hello");

setTimeout(person1.greet.bind(person1), 5 * 1000);
console.log("bye");
