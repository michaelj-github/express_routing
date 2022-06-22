function getMean(nums){
    return (nums.reduce((a, b) => a + b, 0) / nums.length) || 0;
}

// https://stackoverflow.com/questions/45309447/calculating-median-javascript
function getMedian(nums){    
    nums.sort(function(a,b){
    return a-b;
});
let half = Math.floor(nums.length / 2);  
    if (nums.length % 2)
        return nums[half];  
    return (nums[half - 1] + nums[half]) / 2.0;
}

// https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
function getMode(arr){
    return arr.sort((a,b) =>
    arr.filter(v => v===a).length
    - arr.filter(v => v===b).length
    ).pop();
}

function validate(someNums) { 
    if (!someNums) {
    throw new ExpressError('Please include a list of numbers separated by commas.', 400)
}  
    let reqNums = someNums.split(',');
    let theNums = []
    for (sNum of reqNums) {
        num = Number(sNum)
        if (Number.isNaN(num)) {
            throw new ExpressError(`Please include a list of valid numbers separated by commas. ${sNum} is not a valid number.`, 400)
        } else {
            theNums.push(num)
        }
    }
    return theNums
}

module.exports = { 
    validate,
    getMean,
    getMedian,
    getMode
}