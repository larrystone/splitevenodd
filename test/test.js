import { expect } from 'chai';
import mock from '../seeder/mock';
import splitEvenOdd from '../splitEvenOdd';


describe("splitEvenOdd for edge cases", () => {
  const { data0, data1, data6 } = mock;
  it(`should return '${data0.expectedOutput}' for '${data0.input}'`, () => {
    expect(splitEvenOdd(data0.input)).to.deep.equal(data0.expectedOutput);
  });

  it(`should return ${JSON.stringify(data1.expectedOutput)} for [${data1.input}]`, () => {
    expect(splitEvenOdd(data1.input)).to.deep.equal(data1.expectedOutput);
  });

  it(`should return ${JSON.stringify(data6.expectedOutput)} for [${data6.input}]`, () => {
    expect(splitEvenOdd(data6.input)).to.deep.equal(data6.expectedOutput);
  });
});

describe("splitEvenOdd for valid arrays", () => {
  const { data2, data3, data4, data5 } = mock;
  it(`should return ${JSON.stringify(data2.expectedOutput)} for  [${data2.input}]`, () => {
    expect(splitEvenOdd(data2.input)).to.deep.equal(data2.expectedOutput);
  });

  it(`should return ${JSON.stringify(data3.expectedOutput)} for  [${data3.input}]`, () => {
    expect(splitEvenOdd(data3.input)).to.deep.equal(data3.expectedOutput);
  });

  it(`should return ${JSON.stringify(data4.expectedOutput)} for  [${data4.input}]`, () => {
    expect(splitEvenOdd(data4.input)).to.deep.equal(data4.expectedOutput);
  });

  it(`should return ${JSON.stringify(data5.expectedOutput)} for  [${data5.input}]`, () => {
    expect(splitEvenOdd(data5.input)).to.deep.equal(data5.expectedOutput);
  });
});
