// File name: contact.js
// Student’s Name: Maninderpal Singh 
// StudentID: 300942719
// Date: 03/04/2019

let mongoose = require('mongoose');
// mongoose.connect('mongodb://maninder:a123456@ds044989.mlab.com:44989/maninder');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);