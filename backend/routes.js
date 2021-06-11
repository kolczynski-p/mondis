const express = require('express');
const router = express.Router();
const db = require('./app.js');
const {initialPopulateDb} = require('./db/mongo');


router.get('/mongo',(req, res) => {

    db.mongo.collection('products').find().toArray().then(docs=> {res.status(200); return res.json(docs)});

})

router.post('/mongo/ini',async (req, res) => {

    try{
        await initialPopulateDb(db.mongo);
        res.status(200);
        return res.send('DB initialization SUCCESSFUL ');
    }
    catch(err){
        res.status(500);
        return res.send('DB initialization failed');
    }
    
    

})

router.get('/redis',(req, res) => {

    db.redis.setex('testkey',99,'testvalue');
    db.redis.get('testkey', (err, reply) => {
        if (err) res.status(500);
        else
            return res.json(reply);
    });

})

module.exports = router;