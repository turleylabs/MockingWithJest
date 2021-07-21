import {stringCalculator} from './stringCalculator';

test('should print string "0" when input is an empty string', () => { 
    const logger = {
        
    };
    const input = {
        
    };
    stringCalculator(logger, input);

    expect().toEqual("0");
});

xtest('should print the number as a string when string input is a number', () => { 
    const logger = {
    };
    const input = {
    };
    stringCalculator(logger, input);

    expect().toEqual("36");
});
