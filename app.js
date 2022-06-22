const express = require('express')
const ExpressError = require('./expressError')
const { validate, getMode, getMean, getMedian } = require('./helpers');

const app = express();
const port = 3000

// To parse http request body on each request:
app.use(express.json()); //For JSON

app.get('/mean', (req, res) => {
  theNums = validate(req.query.nums)
  let mean = getMean(theNums);
  return res.status(200).json({operation: "mean", value: mean});
})

app.get('/median', (req, res) => {  
  theNums = validate(req.query.nums)
  let theMedian = getMedian(theNums)
  return res.status(200).json({operation: "median", value: theMedian});
})

app.get('/mode', (req, res) => {  
  theNums = validate(req.query.nums)
  let theMode = getMode(theNums)
  return res.status(200).json({operation: "mode", value: theMode});
})

// From Colt's video lecture
// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404)
  next(e)
})

// Error handler
app.use(function (err, req, res, next) { //Note the 4 parameters!
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


