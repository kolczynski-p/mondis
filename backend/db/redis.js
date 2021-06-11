const redis = require('redis');
const port = process.env.REDIS_PORT || 6379;


let redisClient;

function connectToRedis() {
    try {
        redisClient = redis.createClient({ port: port, host: 'redis' });
        return redisClient
    } catch(err){
        console.log('CONNECTION TO REDIS FAILED')
    }

}

module.exports = { connectToRedis }