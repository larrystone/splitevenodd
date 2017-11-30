export default {
  data0: {
    input: "giberrish",
    expectedOutput: "Input should be an array!"
  },
  data1: {
    input: [],
    expectedOutput: {
      invalid: [],
      even: [],
      odd: []
    }
  },
  data2: {
    input: [1, 3, 4, 2, 6, 7],
    expectedOutput: {
      invalid: [],
      even: [4, 2, 6],
      odd: [1, 3, 7]
    }
  },
  data3: {
    input: [-2, -4, -1, -7, -6, -5],
    expectedOutput: {
      invalid: [],
      even: [-2, -4, -6],
      odd: [-1, -7, -5]
    }
  },
  data4: {
    input: [-5, 6, -6, 5, -2, 1, -3],
    expectedOutput: {
      invalid: [],
      odd: [-5, 5, 1, -3],
      even: [6, -6, -2]
    }
  },
  data5: {
    input: [2, 4, 1, 0, 5, 6],
    expectedOutput: {
      invalid: [0],
      even: [2, 4, 6],
      odd: [1, 5]
    }
  },
  data6: {
    input: [2, 4, 1, 'a', true, 0, 5, 6],
    expectedOutput: {
      invalid: ['a', true, 0],
      even: [2, 4, 6],
      odd: [1, 5]
    }
  }
}