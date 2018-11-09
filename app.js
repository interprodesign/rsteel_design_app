const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

const cs_design = require('./design_check/column_shoe/cs_analysis_init');

app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");




// Select app page
app.get('/', (req, res)=> {
    res.render('index.hbs');
});

// Select column shoe design app
app.get('/cs_index',(req,res)=>{
    res.render('cs_design.hbs');
});

// Run the column shoe design analysis
app.post("/cs_analysis", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    // res.json(cs_design.test(req.body));
});






// Start app -------------------------------------------------
const port = 5000;
app.listen(port, () => {
    console.log('Server started on the port: ' + port + '!');
}); 