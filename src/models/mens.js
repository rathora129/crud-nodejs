const express = require("express")
const { default: mongoose } = require("mongoose")

const menSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    code: {
        type: Number,

    },
    desination: {
        type: String,
        
    }

});

const MensRanking = new mongoose.model("MenRanking", menSchema)

module.exports = MensRanking;