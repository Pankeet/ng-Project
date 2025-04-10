const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentData = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, unique: true, required: true },
    dob:{type:String,required:true}
}, {timestamps : true});

const StudentModel = mongoose.model('studentData', studentData);

module.exports = { StudentModel };
 