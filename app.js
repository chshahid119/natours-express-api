const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const AppError = require('./utils/appError');

const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1) GLOBAL MIDDLEWARES
// Set Security HTTP headers
app.use(helmet());
// Developemnet logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit Requests from same APIs
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too Many requests from this IP, please try again in an hour!'
});

app.use('/api', limiter);

// Body parser, reading from body into req.body
app.use(
  express.json({
    limit: '10kb'
  })
);

// Data Sanitization against NOSQL query injection
app.use(mongoSanitize());

// Data Sanitization against XSS (to filter html code with JS script)
app.use(xss());

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

// 2) ROUTE HANDLERS

// 3) ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server!`
  // });

  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

//4) START SERVER
module.exports = app;
