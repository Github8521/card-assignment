const mongoose = require('mongoose');
const validator = require('validator');


const cardSchema = new mongoose.Schema({
    cardName: {
        type: String,
        required: true,
        minlength: 3
    },
    projectBudjet: {
        type: Number,
        required: true,
    },
    projectendDate: {
        type: Date,
        required: true,
       
    }
});
const card = mongoose.model('card-detail', cardSchema);
module.exports=card