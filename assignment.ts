// Problem 1:

const squareNumber = (num1: string | number) => {
  if (typeof num1 === "string") {
    return num1.length;
  } else if (typeof num1 === "number") {
    return num1 * num1;
  }
};

// Problem 2:

interface Person {
  name: string;
  age: number;
  address?: {
    city: string;
    street: number;
  };
  phone?: number;
}
function getAddressCity(value: Person) {
  return value?.address?.city;
}

// Problem 3:

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
}

const isCatInstance = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};

const isCat = (animal: Animal) => {
  if (isCatInstance(animal)) {
    console.log("yes, it's a cat.");
  } else {
    console.log("no, it's not a cat.");
  }
};

const cat = new Cat("cat", "cat");

// Problem 4:

function addSum(num: (string | number)[]) {
  let sum = 0;
  num.forEach((elem) => {
    if (typeof elem === "number") {
      sum += elem;
    } else if (!isNaN(Number(elem))) {
      sum += Number(elem);
    }
  });
  return sum;
}

// Problem 5:

interface Car {
  model: string;
  year: number;
}
interface Driver {
  name: string;
  licenseNumber: number;
}

type resultOfObject = Car & Driver;

function objectCombination(obj1: Car, obj2: Driver): resultOfObject {
  return { ...obj1, ...obj2 };
}

// Problem 6:

const sumArraynum = (value: unknown) => {
  const isArrayofNumber =
    Array.isArray(value) &&
    value.map((elem) => typeof elem === "number").every(Boolean);
  if (isArrayofNumber) {
    let sum = 0;
    for (const values of value) {
      sum += values;
    }
    console.log(sum);
  } else {
    console.error("not an array of number");
  }
};

// Problem 7:

const findFirstOccurrence = <T>(array: T[], valueToSearch: T): number => {
  const index = array.indexOf(valueToSearch);
  return index;
};

const numbers1 = [1, "2", 3];
const numbers2 = [1, 2, "3"];

const indexInNumbers = findFirstOccurrence(numbers1, 4);

// Problem 8:

interface Product {
  name: string;
  price: number;
  quantity: number;
}

function calculateTotalCost(values: Product[]): number {
  let totalcost = 0;
  for (const value of values) {
    totalcost += value.price * value.quantity;
  }
  return totalcost;
}
