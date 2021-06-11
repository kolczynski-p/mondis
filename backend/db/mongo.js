const MongoClient = require("mongodb").MongoClient;
const urlMongo = process.env.MONGO_URL || "mongodb://localhost:27017";


let db;

function connectToServer( callback ) {
    MongoClient.connect(urlMongo,  { useUnifiedTopology: true , useNewUrlParser: true }, function( err, client ) {
        db  = client.db('shop');
        db.createCollection("products",  function(err) {
            //if (err) throw err;
            console.log("Collection created!");
        });
        
        db.collection("products").insertOne({"name":"rekawice bokserskie","cena":150}, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
        
        return callback( err, db );

    })
}

module.exports = {connectToServer}