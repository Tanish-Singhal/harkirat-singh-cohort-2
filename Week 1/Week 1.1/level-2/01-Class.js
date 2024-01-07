class Animal {
  constructor(name, legCount, speaks) {
    this.anme = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    console.log("Animal");
  }
  speak() {
    console.log("Hi there " + this.speaks);
  }
}

console.log(Animal.myType());
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");
dog.speak();