const express = require("express");
const app = express();
mongoose = require("mongoose");
const Character = require("./../models/Character");
const router = express.Router();

const connectionString = 'mongodb+srv://marcin:marcin@cluster0.kea8c.mongodb.net/mojaBaza?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then( () => {
        console.log("Połączono z bazą")
    },
    error => [
        console.log("Błąd połączenia", error)
])

if (Character.length){
    Character.collection.drop();
}
Character.create([
    {name: "Marcin", age: 32, rank: "marszałek"},
    {name: "Joanna", age: 18, rank: "tłumacz"},
    {name: "Wiktor", age: 48, rank: "generał"},
    {name: "Miłosz", age: 42, rank: "szeregowy"},
    {name: "Wojciech", age: 28, rank: "major"},
    {name: "Piotr", age: 33, rank: "major"},
    {name: "Michał", age: 41, rank: "pułkownik"},
]);

router.get("/", async function (req,res) {

    const findID = await Character.find()
    await res.render("index", {
        title: "Tytuł strony",
        find: findID
    })
})

router.get("/posts", async function (req,res){
    const findID = await Character.find();
    await res.json(findID)
})

module.exports = router;