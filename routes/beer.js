var express = require('express'); 
const beer_controlers= require('../controllers/beer'); 

var router = express.Router(); 
 
/* GET beers */ 

router.get('/', beer_controlers.beer_view_all_Page); 
router.get('/detail', beer_controlers.beer_view_one_Page); 
/* GET create beer page */ 
router.get('/create', beer_controlers.beer_create_Page); 
/* GET create update page */ 
//router.get('/beer/:id', beer_controlers.beer_update_put);

/* GET delete costume page */ 
router.get('/delete', beer_controlers.beer_delete_Page); 
module.exports = router