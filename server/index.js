const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { studentForm } = require('./controllers/form');
require('dotenv').config();

app.use(cors({ origin: "*"}));
app.use(express.json());
app.use('/student/forms', studentForm);
async function main(){
    app.listen(8080);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to Db");
}
main();
