const express = require('express');
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

//'views' is the folder name containing html files. http://localhost:3000/about.html will run the about.html file.
//Server static files from 'views' directory:
app.use(express.static('views'));


//http://localhost:3000/
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>');
});

//http://localhost:3000/name
app.get('/name', (req,res) => {
    res.send('Yen');
});

//http://localhost:3000/course/web700
app.get('/course/web700', (req,res) => {
    res.send('WEB700 programming');
});

//http://localhost:3000/college
app.get('/college', (req,res) => {
    const data = {
        method: 'GET',
        name: 'Seneca College',
        location: 'Toronto',
        programs: ['CPA', 'BSD', 'CPD']
    };
    res.send(data);
});



//http://localhost:3000/college
app.post('/college', (req,res) => {
    const data = {
        method: 'POST',
        name: 'Seneca College',
        location: 'Toronto',
        programs: ['CPA', 'BSD', 'CPD']
    };
    res.send(data);
});


//Query parameters example:
//http://localhost:3000/product?id=100&name=Laptop&price=1200
app.get('/product', (req,res) => {
    // res.send(req.query);

    //or
    const data = {
        id: req.query.id,
        name: req.query.name,
        price: req.query.price
    };
    res.send(data);
});



//Route parameters example:
//http://localhost:3000/address/YorkLand/Toronto/M2J3T3
app.get('/address/:street/:city/:postalcode', (req,res) => {
    const data = {
        street: req.params.street,
        city: req.params.city,
        postalcode: req.params.postalcode
    };
    res.send(data);
});


//Start the server:
function onHttpStart() {
    console.log("Express http server listening on: " + SERVER_PORT);
}
app.listen(SERVER_PORT, onHttpStart);


// app.listen(SERVER_PORT, () => {
//     console.log(`Server is running at http://localhost:${SERVER_PORT}`);
// })