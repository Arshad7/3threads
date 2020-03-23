const Express = require("express");
var app = Express();
var cors = require('cors');
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const ApnaConnection = "mongodb+srv://lucifer:hello@123@cluster0-hwgvb.gcp.mongodb.net/test?retryWrites=true&w=majority";
const ApnaDatabase = "users";


app.use(BodyParser.json());
app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
    MongoClient.connect(ApnaConnection, {useNewUrlParser:true,useUnifiedTopology:true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(ApnaDatabase);
        collection = database.collection("test");
        console.log("Connected to `" + ApnaDatabase + "`!");
    });
});



app.post("/person", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});



app.get("/person/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.get("/people", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
        let item = result.name
        // console.log(collection.deleteMany( { "gender" : "MEN" } ));
        // collection.deleteMany( { "gender" : "MEN" } );
    });
});
