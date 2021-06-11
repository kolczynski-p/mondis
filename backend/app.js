const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongo = require('./db/mongo');
const redis = require('./db/redis');
let dbHandle;
let redisHandle;


const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded());
app.use(express.json());

app.use(cors({
	origin: [
		'http://localhost:8080',
		'https://localhost:8080',
	],
	credentials: true,
	exposedHeaders: ['set-cookie']
}));


app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

const server = require('http').createServer(app);

mongo.connectToServer((err, db) => {
	if (err) {
		console.error('FAILED TO CONNECT TO MONGODB');
		console.error(err);
	} else {

		console.log('CONNECTED TO MONGODB');
		console.log('Server is working on port ' + port);
		server.listen(port);

		dbHandle = db;
		redisHandle=redis.connectToRedis();
		module.exports.mongo = dbHandle;
		module.exports.redis = redisHandle;

		const products = require('./routes');
		app.use('/api/products', products);
		

	}
});

