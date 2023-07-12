"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToStart = exports.greetPeopleNew = exports.greetPeopleEl = exports.greetPeople = exports.optionallyAdd = exports.printThis = exports.getPersonNameString = exports.getPersonStreet = exports.getPersonStreetNo = exports.sumEven = exports.getEvensum = exports.countm = exports.count = exports.isOldPerson = exports.greet = void 0;
const greet = (name, birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
};
exports.greet = greet;
const isOld = (age) => age >= 35;
exports.isOldPerson = isOld;
const count = (arr, devisor) => {
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (devisor === 2) {
            if (arr[i] % 2 !== 0) {
                amount += 1;
            }
        }
        else if (arr[i] % devisor === 0) {
            amount += 1;
        }
    }
    return amount;
};
exports.count = count;
// Marcus his code
const countm = (arr, devisor) => {
    if (devisor === 2) {
        return arr.filter(num => num % devisor !== 0).length; // deze onthouden!
    }
    return arr.filter(num => num % devisor === 0).length;
};
exports.countm = countm;
// reduce method my code
const myFunc = (total, num) => total + num;
const getEvensum = (arr) => {
    const newarr = arr.filter(num => num % 2 === 0);
    return newarr.reduce(myFunc);
};
exports.getEvensum = getEvensum;
// Marcus his code
const sumEven = (arr) => arr
    .filter(num => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0);
exports.sumEven = sumEven;
const getPersonStreetNo = (p) => p.address.streetNo;
exports.getPersonStreetNo = getPersonStreetNo;
const getPersonStreet = (p) => p.address.street;
exports.getPersonStreet = getPersonStreet;
const getPersonNameString = (p) => `${p.name}, ${p.birthYear.toString()}`;
exports.getPersonNameString = getPersonNameString;
const printThis = (p) => {
    if (!p) {
        return 'no person supplied';
    }
    return p.name;
};
exports.printThis = printThis;
const optionallyAdd = (num1, num2, num3 = 0, num4 = 0, num5 = 0) => {
    const arr = [num1, num2, num3, num4, num5];
    return [...arr].reduce((a, b) => a + b, 0);
};
exports.optionallyAdd = optionallyAdd;
// Marcus met een gekke zin
// Notice the ...names there? That means that we would
// accept any number of parameters after the first argument.
const greetPeople = (greeting, ...names) => `${greeting} ${names.join(' and ')}`.trim();
exports.greetPeople = greetPeople;
// NOTE THE REPLACE, it replace the last sepeartor in any desired one.
// with presets, put othter preset when neccesary
// oude workaround
const greetPeopleEl = (greeting, ...names) => `${greeting} ${names.join(', ').replace(/, ([^,]*)$/, ' and $1')}`.trim();
exports.greetPeopleEl = greetPeopleEl;
// nieuwe method  - Intl.ListFormat see mdn web docs for documentation
const greetPeopleNew = (greeting, ...names) => {
    const formatter = new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' });
    return `${greeting} ${formatter.format(names)}`;
};
exports.greetPeopleNew = greetPeopleNew;
const addToStart = (list, itemToAdd) => [itemToAdd, ...list];
exports.addToStart = addToStart;
//# sourceMappingURL=index.js.map