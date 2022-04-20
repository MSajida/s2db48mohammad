var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var beer_controller = require('../controllers/beer'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/beer', beer_controller.beer_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/beers/:id', beer_controller.beer_delete); 
 
// PUT request to update Costume. 
router.put('/beers/:id', 
beer_controller.beer_update_put); 
 
// GET request for one Costume. 
router.get('/beers/:id', beer_controller.beer_detail); 
 
// GET request for list of all Costume items. 
router.get('/beers', beer_controller.beer_list); 
 
module.exports = router; 