/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'PizzaM8 - find a place to enjoy the pizza that will rock your world',
        pageHeader: {
            title: 'PizzaM8',
            strapline: 'Find places to pizza in confort!'
        },
        sidebar: "Looking for pizza and delight? PizzaM8 helps you find places to enjoy that perfect slice when out and about the Amarillo and Canyon areas. Perhaps with coffee, cake or a pint? Let PizzaM8 help you find the place you're looking for.",
        locations: [{
            name: '575 Pizzeria',
            address: '2803 Civic Cir',
            rating: 5,
            facilities: ['Craft Beer', 'Brick Oven Pizza', 'Premium Service'],
            distance: 'Amarillo'
        }, {
            name: 'Fireslice',
            address: '7306 SW 34th (space 10), Summit Shopping Center',
            rating: 4,
            facilities: ['Craft Beer', 'Artisanal Pizza', 'Live Music'],
            distance: 'Amarillo'
        }, {
            name: 'Palio\'s Pizza and Bar',
            address: '3562 S Soncy Rd',
            rating: 3,
            facilities: ['Gormet Pizza', 'Premium Desserts'],
            distance: 'Amarillo'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationsInfo = function(req, res) {
    res.render('location-info', {
        title: '575 Pizzeria',
        pageHeader: {
            title: '575 Pizzeria'
        },
        sidebar: {
            context: 'is on PizzaM8 because it has delicious pizza and a great atmosphere to drink and have an awesome night out.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: '575 Pizzeria',
            address: '2803 Civic Cir, Amarillo, TX 79109',
            rating: 3,
            facilities: ['Craft Beer', 'Brick Oven Pizza', 'Premium Service'],
            coords: {
                lat: 35.191050,
                lng: -101.868954
            },
            openingTimes: [{
                days: 'Monday - Thursday',
                opening: '11:00am',
                closing: '9:00pm',
                closed: false
            }, {
                days: 'Friday - Saturday',
                opening: '11:00am',
                closing: '10:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Sally Wright',
                rating: 5,
                timestamp: '04 September 2017',
                reviewText: 'What a fabulous place. I would definitely come back in a heartbeat.'
            }, {
                author: 'Jane Doe',
                rating: 3,
                timestamp: '04 September 2017',
                reviewText: 'It was okay. Pizza was alright, but the service was fast.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReviews = function(req, res) {
    res.render('location-review-form', {
        title: 'Review 575 Pizzeria on PizzaM8',
        pageHeader: {
            title: 'Review 575 Pizzeria'
        }
    });
};