# MONDIS - MongoDB + Redis project ;)
App consists of three components, backend (express), database (mongo), cache database (redis) encapsulated in docker containers and deployed using docker-compose.

To run the app, download repo, then being in "mondis" directory run command: docker-compose up -d
To initialize and seed database send POST request on http://localhost:3001/api/products/mongo/ini

Check requests using postman, endpoints list: 
    
    http://localhost:3001/api/products/mongo/ini
    http://localhost:3001/api/products

Endpoint list:

`POST` *http://localhost:3001/api/mongo/ini*

`GET` *http://localhost:3001/api/products*

`GET` *http://localhost:3001/api/products/:id*

`GET` *http://localhost:3001/api/products/brands/:brand*

`GET` *http://localhost:3001/api/products/category/:category*

`GET` *http://localhost:3001/api/categories*

`POST` *http://localhost:3001/api/orders/order*

`GET` *http://localhost:3001/api/orders*

`GET` *http://localhost:3001/api/orders/:email*