const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8081;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');

const itemsRoute = require('./routes/mainItemRoutes.js');
const googleSearch = require('./routes/googleCafeListRoute');
const fixedMenu = require('./routes/fixedMenuRoute');
const stripePayment = require('./routes/stripePayment');


app.use(express.json());
app.use(cors());
app.use('/items', itemsRoute);
app.use('/cafeSearch', googleSearch);
app.use('/menu', fixedMenu);
app.use('/stripePayment', stripePayment);


app.listen(port, () => console.log(`We're live on ${port}`))