require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./DB/connection');

const homeRoutes = require('./routes/home');

const app = express();

const port = process.env.PORT || 3000;

connectDB();

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(homeRoutes);

app.listen(port, ()=> {
   console.log('connected');
});