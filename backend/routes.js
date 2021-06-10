const express = require('express');
const router = express.Router();
const db = require('./app.js');


router.get('/',(req, res) => {

    db.db.collection('products').find().toArray().then(docs=> {res.status(200); return res.json(docs)});

})

module.exports = router;