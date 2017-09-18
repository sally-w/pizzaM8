var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlpizzaM8 = require('../controllers/pizzaM8-locations');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/pizzaM8', ctrlpizzaM8.homelist);
router.get('/locations', ctrlpizzaM8.locationsInfo);
router.get('/location/reviews/new', ctrlpizzaM8.addReviews);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
