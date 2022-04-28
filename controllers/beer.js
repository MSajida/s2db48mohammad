var beer = require('../models/beer');

// List of all Costumes 
exports.beer_list = async function (req, res) {

    try {
        theBeers = await beer.find();
        res.render('beer', { title: 'beer Search Results', results: theBeers });
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

// Handle Costume delete form on DELETE. 
//exports.beer_delete = function (req, res) {
//  res.send('NOT IMPLEMENTED: beer delete DELETE ' + req.params.id);
//};

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

exports.beer_create_Page = async function(req, res) {
    console.log("create view")
    try {
        res.render('beercreate', { title: 'beer Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle Costume create on POST. 
exports.beer_create_post = async function (req, res) {
    console.log("1231")
    let document = new beer();
    document.name = req.body.name;
    document.type = req.body.type;
    document.price = req.body.price;
    try {
        console.log(res.body);
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.send(500, `{"error": ${err}}`);
    }
    //let document = new beer();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    
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

// Handle Costume delete on DELETE. 
exports.beer_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await beer.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

};

// Handle a show one view with id specified by query 
exports.beer_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await beer.findById(req.query.id)
        res.render('beerdetail',
            { title: 'Beer Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }

};

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.beer_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('beercreate', { title: 'Beer Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a beer. 
// query provides the id 
exports.beer_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await beer.findById(req.query.id)
        res.render('beerupdate', { title: 'Beer Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.beer_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await beer.findById(req.query.id)
        res.render('beerdelete', {title: 'Beer Delete', toShow:result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

