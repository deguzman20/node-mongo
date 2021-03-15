require('dotenv').config();

const mongoose = require('mongoose');

const URI = process.env.ATLAS_URL;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = connectDB;