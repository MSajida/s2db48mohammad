var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy

// Require controller modules. 
var api_controller = require('../controllers/api');
var beer_controller = require('../controllers/beer');

/// API ROUTE /// 

// GET resources base. 
router.get('/', api_controller.api);

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/// COSTUME ROUTES /// 

// POST request for creating a Costume.  
router.get('/create', beer_controller.beer_create_Page);

router.post('/be',secured, beer_controller.beer_create_post);

// DELETE request to delete Costume. 
router.delete('/beers/:id',secured, beer_controller.beer_delete);

// PUT request to update Costume. 
router.get('/beer/:id',secured, beer_controller.beer_update_put);



// GET request for one Costume. 
router.get('/beers/:id', beer_controller.beer_detail);

// GET request for list of all Costume items. 
router.get('/beers', beer_controller.beer_list);

module.exports = router; 