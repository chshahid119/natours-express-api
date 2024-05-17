const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

// mergeParams use krty hain ta ky child apnay parent ki :tourId ko access kar saky jo ky by default mergeParams: false hoti hai
const router = express.Router({ mergeParams: true });

// POST /tour/234fad4/reviews
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
