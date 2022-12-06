import 'mocha';
import assert from 'assert';

import { greet } from './index'

describe('ts tests', () => {
    it('get greeting', () => {
        //arrange
        const birthyear = 1972;
        const name ="Marcus";

        //act
        const result = greet(name, birthyear);

        //assert
        assert.strictEqual(result, "Hello Marcus, you are 50 years old");
    });
});