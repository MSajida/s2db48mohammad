// API for our resources 
exports.api = (req, res) => {
    res.write('[');
    res.write('{"resource":"beers", ');
    res.write('  "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']');
    res.send();
} 