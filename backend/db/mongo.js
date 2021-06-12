const MongoClient = require("mongodb").MongoClient;
const urlMongo = process.env.MONGO_URL || "mongodb://localhost:27017";
const productsData = require('./data/products');
const categoriesData = require('./data/categories');
const { ObjectId } = require('mongodb')


let db;

async function connectToServer(callback) {
    MongoClient.connect(urlMongo, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, client) {
        db = client.db('shop');
        //db.createCollection("products", function (err) {
        //    //if (err) throw err;
        //    console.log("Collection created!");
        //});
        //
        //db.collection("products").insertOne({ "name": "rekawice bokserskie", "cena": 150 }, function (err, res) {
        //    if (err) throw err;
        //    console.log("1 document inserted");
        //});

        return callback(err, db);

    })
}

//Place order

function placeOrder(requestDetails) {
    console.log("ORDER DEBUGG");
    let items = requestDetails.items;
    let totalAmount = 0;
    let itemsUpdated = [];

    Promise.all(items.map((item) => {
        return new Promise((resolve) => {
            const query = { _id: ObjectId(item._id) };
            db.collection('products').find(query).toArray()
            .then(result => {
                result=result[0];
                if (result.stock < item.quantity) {
                    throw "ordered item is not in stock"
                }
                else {
                    let price = result.price * item.quantity;
                    if (result.stock < 3) {
                        price = price * 0.9;
                    }
                    
                    item.price = price;
                    item.brand = result.brand;
                    item.name = result.name;
                    totalAmount += price;
                    console.log(totalAmount)
                    itemsUpdated.push(item);
                    console.log(itemsUpdated);
    
                    const updatedQuantity = result.stock - item.quantity;
                    const updateQuery = {$set: {"stock": updatedQuantity}};
                    
                    db.collection('products').updateOne({_id: ObjectId(item._id)},updateQuery)
                    .then(() => {
                        resolve();
                    });
                }
            });
        })
    })).then(() => {
        requestDetails.items=itemsUpdated;
        requestDetails.totalAmount=totalAmount;
        console.log(requestDetails);
    })
    

    return requestDetails;
}

//Initial MongoDB data seeding

async function initialPopulateDb(dbo) {

    await dbo.listCollections().toArray(async function (err, collections) {
        //Create and populate shop.products
        console.log(collections);
        if (collections.some(x => x.name === 'products')) {
            await dbo.collection("products").drop();
            console.log("products dropped");
        }
        await dbo.createCollection("products", async function (err) {
            if (err) console.log("PRODUCTS COLLECTION CREATION FAILED" + err);
            else {
                try {
                    await dbo.collection('products').insertMany(productsData.products);
                    console.log("Collection products populated ");
                }
                catch (err) { console.log("Products population error " + err); }

                try {
                    await dbo.collection("products").createIndex(productsData.indexes);
                    console.log("Index for products created ");
                }
                catch (err) { console.log("Products index error: " + err); }


            }

        });
        //Create and populate shop.categories
        if (collections.some(x => x.name === 'categories')) {
            await dbo.collection("categories").drop();
            console.log("categories dropped");
        }
        await dbo.createCollection("categories", async function (err) {
            if (err) console.log("PRODUCTS COLLECTION CREATION FAILED" + err);
            else {
                try {
                    await dbo.collection('categories').insertMany(categoriesData.categories);
                    console.log("Collection categories populated ");
                }
                catch (err) { console.log("Categories population error " + err); }

                try {
                    await dbo.collection("categories").createIndex(categoriesData.indexes);
                    console.log("Index for categories created ");
                }
                catch (err) { console.log("Categories index error: " + err); }


            }

        });
    });



    //Create shop.orders

}

module.exports = { connectToServer, initialPopulateDb, placeOrder }