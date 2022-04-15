var express = require('express'); 
const beer_controlers= require('../controllers/beer'); 
var router = express.Router(); 
 
/* GET beers */ 
router.get('/', beer_controlers.beer_view_all_Page); 
module.exports = router