const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookingItemSchema = new Schema({
    id:{
        type:'string',
        required: true
    },
    title:{
        type:'string',
        required: true
    }
})