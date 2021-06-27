//sposób 1. tworzenia modelu

// const mongoose = require("mongoose");

// const Character = mongoose.model("Character",mongoose.Schema({
//     name:String,
//     age:Number,
//     rank:String
// }))

// module.exports = Character;

//sposób 2. tworzenia modelu
const mongoose = require("mongoose");
const CharacterSchema = new mongoose.Schema({
    name:String,
    age:Number,
    rank:String
})

const Character = new mongoose.model("CharacterSchema",CharacterSchema );

module.exports = Character;