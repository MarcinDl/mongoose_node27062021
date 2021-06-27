const express = require("express");
const app = express();
mongoose = require("mongoose");
const Character = require("./models/Character");

app.use(express.urlencoded({extended: true}));
app.use(express.json);

const connectionString = 'mongodb+srv://marcin:marcin@cluster0.kea8c.mongodb.net/mojaBaza?retryWrites=true&w=majority'

async function run(){
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then( () => {
        console.log("Połączono z bazą")
    },
    error => [
        console.log("Błąd połączenia", error)
    ])

    await Character.collection.drop();

    await Character.create([
        {name: "Marcin", age: 32, rank: "marszałek"},
        {name: "Joanna", age: 18, rank: "tłumacz"},
        {name: "Wiktor", age: 48, rank: "generał"},
        {name: "Miłosz", age: 42, rank: "szeregowy"},
        {name: "Wojciech", age: 28, rank: "major"},
        {name: "Piotr", age: 33, rank: "major"},
        {name: "Michał", age: 41, rank: "pułkownik"},
    ]);

    const docs = await Character.find({rank: "major"})
    console.log(docs)
}

run()

const port = 3000;

app.listen(port, () => {
    console.log("Połączono na porcie: " + port)
})