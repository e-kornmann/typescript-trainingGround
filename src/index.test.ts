import 'mocha';
import * as assert from 'assert';

import {
  greet,
  isOldPerson,
  count,
  countm,
  getEvensum,
  sumEven,
  Address,
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
  addToStart,
} from './index';

import {
  PersonClass,
} from './PersonClass';

import {
  EmployeeClass,
} from './EmployeeClass';

import {
  Wrapper,
} from './Wrapper';

describe('ts tests', () => {
  it('get greeting', () => {
    // arrange
    const birthYear = 1983;
    const name = 'Elton';
    // act
    const result = greet(name, birthYear);

    // assert
    assert.strictEqual(result, 'Hello Elton, you are 39 years old');
  });
  it('gets true if age is above 35', () => {
    // act
    const is340Old = isOldPerson(34);
    const is350Old = isOldPerson(35);
    const is360Old = isOldPerson(36);

    // assert
    assert.strictEqual(is340Old, false);
    assert.strictEqual(is350Old, true);
    assert.strictEqual(is360Old, true);
  });
  it('fun with variables', () => {
    // ac t
    const name : string = 'Marcus';
    const nameImplicit = 'Marcus';
    const nameImplicit2 = name;

    const cool : boolean = true;
    const birthYear = 1972;

    // arrange
    assert.strictEqual(typeof (cool), 'boolean');
    assert.strictEqual(typeof (birthYear), 'number');
    assert.strictEqual(typeof (name), 'string');
    assert.strictEqual(typeof (nameImplicit), 'string');
    assert.strictEqual(typeof (nameImplicit2), 'string');
  });
  it('count odd numbers', () => {
  // arrange
    const firstFive = [1, 2, 3, 4, 5, 6, 8, 9, 18];
    // act with my code
    const numberOfOdds = count(firstFive, 2);
    const numberOfThirds = count(firstFive, 3);
    const numberOfSixths = count(firstFive, 6);
    // act with marcus his code
    const numberOfOddsMarcus = countm(firstFive, 2);
    const numberOfThirdsMarcus = countm(firstFive, 3);
    const numberOfSixthsMarcus = countm(firstFive, 6);
    // arrange
    assert.strictEqual(numberOfOdds, 4);
    assert.strictEqual(numberOfThirds, 4);
    assert.strictEqual(numberOfSixths, 2);
    // arrange with marcus his code
    assert.strictEqual(numberOfOddsMarcus, 4);
    assert.strictEqual(numberOfThirdsMarcus, 4);
    assert.strictEqual(numberOfSixthsMarcus, 2);
  });
  it('sum even numbers', () => {
    const evennums = [1, 2, 3, 4, 5, 6, 8, 9, 18];
    const sumofEven = getEvensum(evennums);
    const sumofEvenM = sumEven(evennums);
    assert.strictEqual(sumofEven, 38);
    assert.strictEqual(sumofEvenM, 38);
  });
  it('gets the street number for a person', () => {
    // arrange
    const p : Person = {
      name: 'Marcus',
      birthYear: 1972,
      address: {
        street: 'Strålgatan',
        streetNo: 23,
        city: 'Stockholm',
      },
    };

    // act
    const streetNo = getPersonStreetNo(p);
    const street = getPersonStreet(p);

    // assert
    assert.strictEqual(streetNo, 23);
    assert.strictEqual(street, 'Strålgatan');
  });
  it('using classes', () => {
    // arrange
    const p = new PersonClass('Marcus', 1972);
    const e = new EmployeeClass('Marcus Employee', 1972);
    // act
    e.employeeId = 12345;

    // assert
    // assert.strictEqual(p.name, 'Marcus');
    // breaks with Property 'name' is private and only accessible WITHIN class 'PersonClass'
    assert.strictEqual(p.birthYear, 1972);
    assert.strictEqual(p.getName(), 'Marcus');
    assert.strictEqual(e.getName(), 'Marcus Employee');
    assert.strictEqual(e.employeeId, 12345);
  });
  it('prints an IPerson', () => {
    // arrange
    const p1 : IPerson = { name: 'Marcus', birthYear: 1972 };
    const p2 = { name: 'David', birthYear: 1975, drummer: true };
    // so don't put drummer there because it does not follow the contract of the interface
    // but because name and birthyear are in the contract it still passes

    // act
    const p1Address = getPersonNameString(p1);
    const p2Address = getPersonNameString(p2);

    // assert
    assert.strictEqual(p1Address, 'Marcus, 1972');
    assert.strictEqual(p2Address, 'David, 1975');
    assert.strictEqual(p2Address, 'David, 1975');
  });
  it('uses union types to allow null', () => {
    // act
    const result1 = printThis(undefined);
    const result2 = printThis(null);

    // assert
    assert.strictEqual(result1, 'no person supplied');
    assert.strictEqual(result2, 'no person supplied');
  });
  it('optional parameters', () => {
    // act
    const sum = optionallyAdd(1, 2, 3, 4, 5);

    // assert
    assert.strictEqual(sum, 15);
  });
  it('rest parameters - print names', () => {
    // act
    const greeting1 = greetPeople('Hello');
    const greeting2 = greetPeople('Hello', 'Marcus');
    const greeting3 = greetPeople('Hello', 'Marcus', 'Dasha');
    const greeting4 = greetPeople('Hello', 'Marcus', 'Dasha', 'David');
    const greeting4El = greetPeopleEl('Hello', 'Marcus', 'Dasha', 'David');
    const greeting5New = greetPeopleNew('Hello', 'Marcus', 'Dasha', 'David', 'Julia', 'Wietse', 'Lucas');

    // assert
    assert.strictEqual(greeting1, 'Hello');
    assert.strictEqual(greeting2, 'Hello Marcus');
    assert.strictEqual(greeting3, 'Hello Marcus and Dasha');
    assert.strictEqual(greeting4, 'Hello Marcus and Dasha and David');
    assert.strictEqual(greeting4El, 'Hello Marcus, Dasha and David');
    assert.strictEqual(greeting5New, 'Hello Marcus, Dasha, David, Julia, Wietse and Lucas');
  });

  it('add to list', () => {
    // arrange
    const listOfPeople : IPerson[] = [
      { name: 'Marcus', birthYear: 1972 },
    ];
    const listOfAddresses : Address[] = [
      { street: 'Strålgatan', streetNo: 23, city: 'Stockholm' },
      { street: 'SchraeschazschStrasse', streetNo: 2, city: 'Amsterdam' },
    ];

    // act
    const numberOfPeople = addToStart<IPerson>(listOfPeople, { name: 'David', birthYear: 1975 });
    const numberOfAddresses = addToStart<Address>(listOfAddresses, { street: 'Champs Elysee', streetNo: 1, city: 'Paris' });

    // assert
    assert.strictEqual(numberOfPeople[0].name, 'David');
    assert.strictEqual(numberOfAddresses[0].city, 'Paris');
    assert.strictEqual(numberOfPeople[1].name, 'Marcus');
    assert.strictEqual(numberOfAddresses[2].city, 'Amsterdam');
  });
  it('wrapper for addresses', () => {
    // arrange
    const listOfAddresses : Address[] = [
      { street: 'Strålgatan', streetNo: 23, city: 'Stockholm' },
      { street: 'SchraeschazschStrasse', streetNo: 2, city: 'Amsterdam' },
      { street: 'Champs Elysee', streetNo: 1, city: 'Paris' },
    ];

    // act
    const addresslist = new Wrapper<Address>(listOfAddresses);

    // assert
    assert.strictEqual(addresslist.getFirst().city, 'Stockholm');
    assert.strictEqual(addresslist.getLast().city, 'Paris');
  });
  it('wrapper for IPerson', () => {
    // arrange
    const listOfPersons : IPerson[] = [
      { name: 'Elton', birthYear: 1983 },
      { name: 'Mandy', birthYear: 1983 },
      { name: 'Reza', birthYear: 2017 },
      { name: 'Sen', birthYear: 2012 },
    ];

    // act
    const personlist = new Wrapper<IPerson>(listOfPersons);

    // assert
    assert.strictEqual(personlist.getFirst().birthYear, 1983);
    assert.strictEqual(personlist.getLast().name, 'Sen');
    assert.strictEqual(personlist.getList().name, 'Reza');
  });
});
