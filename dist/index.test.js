"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const index_1 = require("./index");
const PersonClass_1 = require("./PersonClass");
const EmployeeClass_1 = require("./EmployeeClass");
describe('ts tests', () => {
    it('get greeting', () => {
        // arrange
        const birthYear = 1983;
        const name = 'Elton';
        // act
        const result = (0, index_1.greet)(name, birthYear);
        // assert
        assert_1.default.strictEqual(result, 'Hello Elton, you are 39 years old');
    });
    it('gets true if age is above 35', () => {
        // act
        const is340Old = (0, index_1.isOld)(34);
        const is350Old = (0, index_1.isOld)(35);
        const is360Old = (0, index_1.isOld)(36);
        // assert
        assert_1.default.strictEqual(is340Old, false);
        assert_1.default.strictEqual(is350Old, true);
        assert_1.default.strictEqual(is360Old, true);
    });
    it('fun with variables', () => {
        // ac t
        const name = 'Marcus';
        const nameImplicit = 'Marcus';
        const nameImplicit2 = name;
        const cool = true;
        const birthYear = 1972;
        // arrange
        assert_1.default.strictEqual(typeof (cool), 'boolean');
        assert_1.default.strictEqual(typeof (birthYear), 'number');
        assert_1.default.strictEqual(typeof (name), 'string');
        assert_1.default.strictEqual(typeof (nameImplicit), 'string');
        assert_1.default.strictEqual(typeof (nameImplicit2), 'string');
    });
    it('count odd numbers', () => {
        // arrange
        const firstFive = [1, 2, 3, 4, 5, 6, 8, 9, 18];
        // act with my code
        const numberOfOdds = (0, index_1.count)(firstFive, 2);
        const numberOfThirds = (0, index_1.count)(firstFive, 3);
        const numberOfSixths = (0, index_1.count)(firstFive, 6);
        // act with marcus his code
        const numberOfOddsMarcus = (0, index_1.countm)(firstFive, 2);
        const numberOfThirdsMarcus = (0, index_1.countm)(firstFive, 3);
        const numberOfSixthsMarcus = (0, index_1.countm)(firstFive, 6);
        // arrange
        assert_1.default.strictEqual(numberOfOdds, 4);
        assert_1.default.strictEqual(numberOfThirds, 4);
        assert_1.default.strictEqual(numberOfSixths, 2);
        // arrange with marcus his code
        assert_1.default.strictEqual(numberOfOddsMarcus, 4);
        assert_1.default.strictEqual(numberOfThirdsMarcus, 4);
        assert_1.default.strictEqual(numberOfSixthsMarcus, 2);
    });
    it('sum even numbers', () => {
        const evennums = [1, 2, 3, 4, 5, 6, 8, 9, 18];
        const sumofEven = (0, index_1.getEvensum)(evennums);
        const sumofEvenM = (0, index_1.sumEven)(evennums);
        assert_1.default.strictEqual(sumofEven, 38);
        assert_1.default.strictEqual(sumofEvenM, 38);
    });
    it('gets the street number for a person', () => {
        // arrange
        const p = {
            name: 'Marcus',
            birthYear: 1972,
            address: {
                street: 'Strålgatan',
                streetNo: 23,
                city: 'Stockholm',
            },
        };
        // act
        const streetNo = (0, index_1.getPersonStreetNo)(p);
        const street = (0, index_1.getPersonStreet)(p);
        // assert
        assert_1.default.strictEqual(streetNo, 23);
        assert_1.default.strictEqual(street, 'Strålgatan');
    });
    it('using classes', () => {
        // arrange
        const p = new PersonClass_1.PersonClass('Marcus', 1972);
        const e = new EmployeeClass_1.EmployeeClass('Marcus Employee', 1972);
        // act
        e.employeeId = 12345;
        // assert
        // assert.strictEqual(p.name, 'Marcus');
        // breaks with Property 'name' is private and only accessible within class 'PersonClass'
        assert_1.default.strictEqual(p.getName(), 'Marcus');
        assert_1.default.strictEqual(e.getName(), 'Marcus Employee');
        assert_1.default.strictEqual(e.employeeId, 12345);
    });
    it('prints an IPerson', () => {
        // arrange
        const p1 = { name: 'Marcus', birthYear: 1972 };
        const p2 = { name: 'David', birthYear: 1975, drummer: true }; // so don't put drummer there because it does not follow the contract of the interface
        // act
        const p1Address = (0, index_1.getPersonNameString)(p1);
        const p2Address = (0, index_1.getPersonNameString)(p2);
        // assert
        assert_1.default.strictEqual(p1Address, 'Marcus, 1972');
        assert_1.default.strictEqual(p2Address, 'David, 1975');
        assert_1.default.strictEqual(p2Address, 'David, 1975');
    });
    it('uses union types to allow null', () => {
        // act
        const result1 = (0, index_1.printThis)(undefined);
        const result2 = (0, index_1.printThis)(null);
        // assert
        assert_1.default.strictEqual(result1, "no person supplied");
        assert_1.default.strictEqual(result2, "no person supplied");
    });
    it('optional parameters', () => {
        // act
        const sum = (0, index_1.optionallyAdd)(1, 2, 3, 4, 5);
        // assert
        assert_1.default.strictEqual(sum, 15);
    });
    it('rest parameters - print names', () => {
        // act
        const greeting1 = (0, index_1.greetPeople)("Hello");
        const greeting2 = (0, index_1.greetPeople)("Hello", "Marcus");
        const greeting3 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha");
        const greeting4 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha", "David");
        const greeting4El = (0, index_1.greetPeopleEl)("Hello", "Marcus", "Dasha", "David");
        const greeting5El = (0, index_1.greetPeopleEl)("Hello", "Marcus", "Dasha", "David", "Julia", "Wietse", "Lucas");
        const greeting5New = (0, index_1.greetPeopleNew)("Hello", "Marcus", "Dasha", "David", "Julia", "Wietse", "Lucas");
        // assert
        assert_1.default.strictEqual(greeting1, "Hello");
        assert_1.default.strictEqual(greeting2, "Hello Marcus");
        assert_1.default.strictEqual(greeting3, "Hello Marcus and Dasha");
        assert_1.default.strictEqual(greeting4, "Hello Marcus and Dasha and David");
        assert_1.default.strictEqual(greeting4El, "Hello Marcus, Dasha and David");
        assert_1.default.strictEqual(greeting5New, "Hello Marcus, Dasha, David, Julia, Wietse and Lucas");
    });
});
