const express = require('express');
const router = express.Router();
const db = require('./app.js');
const { initialPopulateDb, placeOrder } = require('./db/mongo');
const { ObjectId } = require('mongodb')
const { saveToRedis, readFromRedis } = require('./redis-utils');

//This request populate db with test data
router.post('/mongo/ini', async (req, res) => {

    try {
        await initialPopulateDb(db.mongo);
        res.status(200);
        return res.send('DB initialization SUCCESSFUL ');
    }
    catch (err) {
        res.status(500);
        return res.send('DB initialization failed');
    }

})

//Products requests sections

//Get all products
router.get('/products', async (req, res) => {

    try {
        await db.mongo.collection('products').find().toArray()
            .then(docs => {
                res.status(200);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        return res.send('Data fetch failed');
    }

})

//Get single product by _id
router.get('/products/:id', async (req, res) => {

    try {
        const query = { _id: ObjectId(req.params.id) };
        await db.mongo.collection('products').find(query).toArray()
            .then(docs => {
                res.status(200);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        console.log(err)
        return res.send('Data fetch failed');
    }

})

//Get products by brand
router.get('/products/brands/:brand', async (req, res) => {

    try {
        const query = { brand: req.params.brand };
        await db.mongo.collection('products').find(query).toArray()
            .then(docs => {
                res.status(200);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        return res.send('Data fetch failed');
    }

})

//Get products by category
router.get('/products/categories/:category(*)', async (req, res) => {
    console.log(req.params.category);
    try {
        const query = { category: req.params.category };
        await db.mongo.collection('products').find(query).toArray()
            .then(docs => {
                res.status(200);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        return res.send('Data fetch failed');
    }

})


//Get products on sale (stock<3) from redis 
router.get('/products/sale', async (req, res) => {

    try {
        await db.mongo.collection('products').find().toArray()
            .then(docs => {
                res.status(200);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        return res.send('Data fetch failed');
    }

})


//Categories requests sections

//Get all categories
router.get('/categories', readFromRedis, async (req, res) => {
    console.log("Nie ma cache więc ściągam...");
    try {
        await db.mongo.collection('categories').find().toArray()
            .then(docs => {
                res.status(200);
                saveToRedis(docs);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        return res.send('Data fetch failed');
    }

})

//Orders requests sections


//Place order
router.post('/orders/order', async (req, res) => {
    const requestDetails = req.body;

    try {
        const orderResult = placeOrder(requestDetails).setTimeout(()=>{
            res.status(500);
            return res.send('Data insert failed, no order placed')

        },3000) ;
        res.status(200);
        return res.json(orderResult);
    }
    catch (err) {
        res.status(500);
        return res.send('Data insert failed, no order placed');
    }

})

//Get all orders
router.get('/orders', async (req, res) => {

    try {
        await db.mongo.collection('orders').find().toArray()
            .then(docs => {
                res.status(200);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        return res.send('Data fetch failed, no orders found');
    }

})

//Get orders by email
router.get('/orders/:email', async (req, res) => {

    try {
        const query = { email: req.params.email };
        await db.mongo.collection('orders').find(query).toArray()
            .then(docs => {
                res.status(200);
                return res.json(docs)
            });
    }
    catch (err) {
        res.status(500);
        return res.send('Data fetch failed, no orders found');
    }

})

//Test redis request
router.get('/redis', (req, res) => {

    db.redis.setex('testkey', 99, 'testvalue');
    db.redis.get('testkey', (err, reply) => {
        if (err) res.status(500);
        else
            return res.json(reply);
    });

})

module.exports = router;