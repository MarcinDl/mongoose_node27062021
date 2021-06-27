const express = require("express");
const app = express();
mongoose = require("mongoose");

app.use(express.urlencoded({extended: true}));
app.use(express.json);

const connectionString = "";

function run(){
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useunifiedTopology: true,
        useFindAndModify: false
    }).then( () => {
        console.log("Połączono z bazą")
    },
    error => [
        console.log("Błąd połączenia", error)
    ])
}

run().catch(error => console.log(error.stack));

const port = 3000;

app.listen(port, () => {
    console.log("Połączono na porcie: " + port)
})