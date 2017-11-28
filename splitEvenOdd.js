export default (inputArray) => {
  let even = [],
    odd = [],
    invalid = [];

  try {
    if (inputArray.length === 0) {
      return { invalid, even, odd };
    }
    
    even = inputArray.filter((value) => {
      if (typeof value !== 'number' || value === 0) {
        invalid.push(value);
      }
      else if (value % 2 !== 0) {
        odd.push(value);
      }
      return value !== 0 && value % 2 === 0;
    });

    return { invalid, even, odd };
  } catch (err) {
    return 'Input should be an array!';
  }
};
