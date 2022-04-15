var beer = require('../models/beer');

// List of all Costumes 
exports.beer_list = async function (req, res) {

    try {
        theBeers = await beer.find();
        res.send(theBeers);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

};

// for a specific Costume. 
//exports.beer_detail = function(req, res) { 
//res.send('NOT IMPLEMENTED: beer detail: ' + req.params.id); 
//};  

// Handle Costume create on POST. 
exports.beer_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: beer create POST');
};

// Handle Costume delete form on DELETE. 
exports.beer_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: beer delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT. 
//exports.beer_update_put = function(req, res) { 
//  res.send('NOT IMPLEMENTED: Beer update PUT' + req.params.id); 
//}; 

exports.beer_view_all_Page = async function (req, res) {
    try {
        theBeers = await beer.find();
        res.render('beer', { title: 'Beer Search Results', results: theBeers });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Beer. 
exports.beer_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await beer.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume create on POST. 
exports.beer_create_post = async function (req, res) {
    console.log(req.body)
    let document = new beer();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name;
    document.type = req.body.type;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume update form on PUT. 
exports.beer_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await beer.findById(req.params.id)
        console.log(toUpdate + " toup")
        
        // Do updates of properties 
        if (req.body.type) toUpdate.type = req.body.type;
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
}; 