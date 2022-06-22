const {getMean, getMedian, getMode,} = require("./helpers");

test("calculates the mean", function () { 
    expect(getMean([1,2,3])).toEqual(2)
    expect(getMean([0])).toEqual(0)
})

test("finds the median", function () { 
    expect(getMedian([1,2,3])).toEqual(2)
    expect(getMedian([0])).toEqual(0)
})

test("finds the mode", function () { 
    expect(getMode([1,2,2,3,3,3])).toEqual(3)
    expect(getMode([0])).toEqual(0)
})
