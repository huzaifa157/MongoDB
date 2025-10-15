const mongoose = require("mongoose");

const chatScheme = new mongoose.Schema({

    from : {
        type : String,
        required: true
    },
    to : {
        type : String,
        required : true

    },
    msg : {
        type : String,
        minLength : 1
    },
    createdAt : {
        type : Date,
        required: true


    },
});

const chat = mongoose.model("chat", chatScheme);
module.exports = chat;