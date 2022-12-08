import 'mocha';
import assert from 'assert';

import { greet } from './index';

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
});
