// Immutable Data

// Mutable - can be changed after creation
// Immutable - can't be changed after creation

class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

const mg1 = new MutableGlass("water", 100);
const mg2 = mg1.takeDrink(20);

console.log(mg1 === mg2);
console.log(mg1.amount === mg2.amount);
console.log(mg1.amount);

class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
  }
}

const ig1 = new ImmutableGlass("wine", 100);
const ig2 = ig1.takeDrink(20);

console.log(ig1 === ig2);
console.log(ig1.amount === ig2.amount);
console.log(ig1.amount);
console.log(ig2.amount);
