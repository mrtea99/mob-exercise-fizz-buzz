const fizzBuzz = (number) => {
  if (isNaN(number)) {
    return false;
  }

  if (number % 3 !== 0 && number % 5 !== 0) {
    return number;
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }

  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }
};

describe('Fizz Buzz', () => {
  it('return false when the given argument is not a number', () => {
    const result = fizzBuzz('gobbledygook');
    expect(result).toBe(false);
  });
  it('Returns "Fizz" if the number is divisible by 3', () => {
    const result = fizzBuzz(9);
    expect(result).toBe('Fizz');
  });
  it('Returns "Buzz" if the number is divisible by 5', () => {
    const result = fizzBuzz(10);
    expect(result).toBe('Buzz');
  });
  it('Returns "FizzBuzz" if the number is divisible by 3 AND 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });
  it('Returns the given number if it is not divisible by 3 OR 5', () => {
    const result = fizzBuzz(7);
    expect(result).toBe(7);
  });
});
