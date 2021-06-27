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

    if (Character.length){
        await Character.collection.drop();
    }
    await Character.create([
        {name: "Marcin", age: 32, rank: "marszałek"},
        {name: "Joanna", age: 18, rank: "tłumacz"},
        {name: "Wiktor", age: 48, rank: "generał"},
        {name: "Miłosz", age: 42, rank: "szeregowy"},
        {name: "Wojciech", age: 28, rank: "major"},
        {name: "Piotr", age: 33, rank: "major"},
        {name: "Michał", age: 41, rank: "pułkownik"},
    ]);

    //przykład 1 - pokaz
    // const docs = await Character.find({rank: "major"})
    // console.log(docs)
    //przykład 2 - find by ID and update
    // const findID = await Character.find()
    // console.log(findID)
    // const docs = await Character.findByIdAndUpdate({_id: findID[2]._id}, {rank: "generał polowy"});
    // console.log(docs)
    //przykład 3 - find and update by some property
    // const docs = await Character.findOneAndUpdate({name: "Miłosz"}, {age: 73})
    //przykład 4 - update many
    // const dosc = await Character.updateMany({rank: "major"},{rank: "podpułkownik"})
    // przykład 5 - update many
    // const docs = await Character.updateMany({},{employment: true});
    // przykład 6 - add new document to collection
    // const insertDoc = new Character({name:"Paweł", rank: "kapitan"})
    // await insertDoc.save(function (err,someVal){
    //     if (err) return console.error(err)
    //     console.log(someVal + " został zapisany do kolekcji")
    // });
    // const docs = await Character.find({});
    // console.log(docs)
    // przykład 7 - remove one document from collection
    // const docs = await Character.deleteOne({rank: "szeregowy"})
    // przykład 8 - remove one document BY ID from collection
    // const findID = await Character.find();
    // const docs = await Character.deleteOne({_id: findID[1]._id})
    // przykład 9 - remove many
    // const docs = await Character.deleteMany({rank: "major"})
    // przykład 10 - find by id and romove
    const findID = await Character.find();
    const docs = await Character.findByIdAndRemove(findID[0]._id)
    
}

run()

const port = 3000;

app.listen(port, () => {
    console.log("Połączono na porcie: " + port)
})