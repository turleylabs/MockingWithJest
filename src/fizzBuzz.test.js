import {fizzBuzz} from './fizzBuzz';
import {fetchNumber} from './fetchNumber';

xtest('fizzBuzz returns Fizz for 3', async () => {
    const result = await fizzBuzz();
    expect(result).toEqual('Fizz');
});
