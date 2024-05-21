const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();

  tours.forEach(tour => {
    tour.formattedDate = new Date(tour.startDates[0]).toLocaleString('en-us', {
      month: 'long',
      year: 'numeric'
    });
  });

  // 2) Build template

  // 3) Render that template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    tour: 'The Forest Hiker',
    user: 'Shahid'
  });
};
