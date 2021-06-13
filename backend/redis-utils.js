const db = require('./app.js');

function saveToRedis(docs) {
  console.log("Zapisuje do cache...");
    const docsIds = docs.map(doc => doc._id);
    db.redis.setex(`categories:ids`, 3600, JSON.stringify(docsIds));
    docs.forEach((doc) => {
        db.redis.setex(`categories:${doc._id}`, 3600, JSON.stringify(doc));
    })
}

async function readFromRedis(req, res, next) {
  let docsIds;
  let docs = await new Promise((resolve) => {
    db.redis.get("categories:ids", async (err, reply) => {
      if(reply !== null) {
        docsIds = JSON.parse(reply);

        resolve(await Promise.all(
          docsIds.map((docId) => new Promise(resolve => {
              db.redis.get(`categories:${docId}`, (err, reply) => {
                resolve(JSON.parse(reply))
              })
            })
          )
        ));

      } else {
        next();
      }
    })
  });
  console.log("Wczytuje z cache...");
  return res.json(docs)
}

module.exports = { saveToRedis, readFromRedis }