const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'));

// mongo db connetion
connectDB();

// parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

// set view engine
app.set('view engine', 'ejs');

// load assets 
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));

// load router
app.use('/', require('./server/routes/router'));


app.listen(PORT, () => {
    console.log(`Server listening in ${PORT}`);
});



