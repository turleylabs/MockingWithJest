import {fetchNumber} from './fetchNumber';

export function fizzBuzz() {
    return fetchNumber().then(number => {
        if (number === 3) {
            return 'Fizz';
        }
        if (number === 5) {
            return 'Buzz';
        }
        return number.toString();    
    });
}
