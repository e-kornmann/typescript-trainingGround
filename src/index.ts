const greet = (name: string, birthYear: number) => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
};
const isOld = (age: number) => age >= 35;

const count = (arr:number[], devisor: number) => {
  let amount : number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (devisor === 2) {
      if (arr[i] % 2 !== 0) {
        amount += 1;
      }
    } else if (arr[i] % devisor === 0) {
      amount += 1;
    }
  }
  return amount;
};
// Marcus his code
const countm = (arr:number[], devisor: number) => {
  if (devisor === 2) {
    return arr.filter(num => num % devisor !== 0).length; // deze onthouden!
  } return arr.filter(num => num % devisor === 0).length;
};

// reduce method my code
const myFunc = (total: number, num: number) => total + num;

const getEvensum = (arr:number[]) => {
  const newarr = arr.filter(num => num % 2 === 0);
  return newarr.reduce(myFunc);
};

// Marcus his code
const sumEven = (arr:number[]) => arr
  .filter(num => num % 2 === 0)
  .reduce((sum, curr) => sum + curr, 0);

type Address = {
  street: string,
  streetNo: number,
  city: string,
};

type Person = {
  name: string,
  birthYear: number,
  address: Address
};

const getPersonStreetNo = (p:Person) => p.address.streetNo;

const getPersonStreet = (p:Person) => p.address.street;
interface IPerson {
  name: string,
  birthYear: number,
}

const getPersonNameString = (p:IPerson) => `${p.name}, ${p.birthYear.toString()}`;

const printThis = (p:Person | undefined | null) => {
  if (!p) { return 'no person supplied'; }
  return p.name;
};

const optionallyAdd = (
  num1:number,
  num2:number,
  num3:number = 0,
  num4:number = 0,
  num5:number = 0,
) => {
  const arr = [num1, num2, num3, num4, num5];
  return [...arr].reduce((a, b) => a + b, 0);
};

// Marcus met een gekke zin
// Notice the ...names there? That means that we would
// accept any number of parameters after the first argument.
const greetPeople = (greeting:string, ...names:string[]) => `${greeting} ${names.join(' and ')}`.trim();

// NOTE THE REPLACE, it replace the last sepeartor in any desired one.
// with presets, put othter preset when neccesary
// oude workaround
const greetPeopleEl = (greeting:string, ...names:string[]) => `${greeting} ${names.join(', ').replace(/, ([^,]*)$/, ' and $1')}`.trim();

// nieuwe method  - Intl.ListFormat see mdn web docs for documentation
const greetPeopleNew = (greeting:string, ...names:string[]) => {
  const formatter = new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' });
  return `${greeting} ${formatter.format(names)}`;
};

export {
  greet,
  isOld as isOldPerson,
  count,
  countm,
  getEvensum,
  sumEven,
  Person,
  getPersonStreetNo,
  getPersonStreet,
  IPerson,
  getPersonNameString,
  printThis,
  optionallyAdd,
  greetPeople,
  greetPeopleEl,
  greetPeopleNew,
};
