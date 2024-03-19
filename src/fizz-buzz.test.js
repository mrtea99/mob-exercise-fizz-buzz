const fizzBuzz = (number) => {
  if (isNaN(number)) {
    return false;
  }
};

describe('Fizz Buzz', () => {
  it('return false when the given argument is not a number', () => {
    const result = fizzBuzz('gobbledygook');
    expect(result).toBe(false);
    //call the fuction withe number
    // call function as string
    // Arrange
    // Act
    // Assert
  });
  it('Returns "Fizz" if the number is divisible by 3', () => {
    const result = fizzBuzz(9);
    expect(result).toBe('Fizz');
  });
});
