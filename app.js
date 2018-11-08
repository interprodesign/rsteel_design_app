const express = require('express');
const hbs = require('hbs');
var path = require('path');
const app = express();


app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");



// Select app page
app.get('/', (req, res)=> {
    res.render('index');
});



app.get('/cs_index',(req,res)=>{
    res.render('cs_index.hbs');
});






// Start app -------------------------------------------------
const port = 5000;
app.listen(port, () => {
    console.log('Server started on the port: ' + port + '!');
}); 