const products = [
    {
        "brand": "New Balance",
        "name": "680",
        "price": 350,
        "category": "/Running/Shoes/Men",
        "size": 42,
        "stock": 5,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 350,
        "category": "/Running/Shoes/Men",
        "size": 43,
        "stock": 12,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 350,
        "category": "/Running/Shoes/Men",
        "size": 44,
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 350,
        "category": "/Running/Shoes/Men",
        "size": 45,
        "stock": 5,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 350,
        "category": "/Running/Shoes/Men",
        "size": 45,
        "stock": 1,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 350,
        "category": "/Running/Shoes/Men",
        "size": 46,
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 340,
        "category": "/Running/Shoes/Women",
        "size": 37,
        "stock": 5,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 340,
        "category": "/Running/Shoes/Women",
        "size": 38,
        "stock": 12,
        "description": "Lorem ipsum"
    },
    {
        "brand": "New Balance",
        "name": "680",
        "price": 340,
        "category": "/Running/Shoes/Women",
        "size": 39,
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 450,
        "category": "/Running/Shoes/Men",
        "size": 41,
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 450,
        "category": "/Running/Shoes/Men",
        "size": 42,
        "stock": 20,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 450,
        "category": "/Running/Shoes/Men",
        "size": 43,
        "stock": 1,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 450,
        "category": "/Running/Shoes/Men",
        "size": 44,
        "stock": 50,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 460,
        "category": "/Running/Shoes/Men",
        "size": 42,
        "stock": 40,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 460,
        "category": "/Running/Shoes/Men",
        "size": 43,
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 460,
        "category": "/Running/Shoes/Men",
        "size": 44,
        "stock": 2,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 460,
        "category": "/Running/Shoes/Men",
        "size": 45,
        "stock": 5,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 420,
        "category": "/Running/Shoes/Women",
        "size": 36,
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 420,
        "category": "/Running/Shoes/Women",
        "size": 37,
        "stock": 20,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 420,
        "category": "/Running/Shoes/Women",
        "size": 38,
        "stock": 15,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Airmax 90",
        "price": 420,
        "category": "/Running/Shoes/Women",
        "size": 39,
        "stock": 40,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 430,
        "category": "/Running/Shoes/Women",
        "size": 36,
        "stock": 42,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 430,
        "category": "/Running/Shoes/Women",
        "size": 37,
        "stock": 2,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 430,
        "category": "/Running/Shoes/Women",
        "size": 38,
        "stock": 2,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Nike",
        "name": "Nike Flyknit 1.0",
        "price": 430,
        "category": "/Running/Shoes/Women",
        "size": 39,
        "stock": 12,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Powerlock",
        "price": 60,
        "category": "/Martial Arts/Gloves",
        "size": "10oz",
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Powerlock",
        "price": 60,
        "category": "/Martial Arts/Gloves",
        "size": "12oz",
        "stock": 12,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Powerlock",
        "price": 60,
        "category": "/Martial Arts/Gloves",
        "size": "14oz",
        "stock": 1,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Lonsdale",
        "name": "Pro Training Gloves",
        "price": 70,
        "category": "/Martial Arts/Gloves",
        "size": "10oz",
        "stock": 15,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Lonsdale",
        "name": "Pro Training Gloves",
        "price": 70,
        "category": "/Martial Arts/Gloves",
        "size": "12oz",
        "stock": 13,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Lonsdale",
        "name": "Pro Training Gloves",
        "price": 70,
        "category": "/Martial Arts/Gloves",
        "size": "13oz",
        "stock": 10,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Pro 3 hook",
        "price": 150,
        "category": "/Martial Arts/Gloves",
        "size": "10oz",
        "stock": 5,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Pro 3 hook",
        "price": 150,
        "category": "/Martial Arts/Gloves",
        "size": "12oz",
        "stock": 12,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Pro 3 hook",
        "price": 150,
        "category": "/Martial Arts/Gloves",
        "size": "14oz",
        "stock": 3,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Headguard",
        "price": 80,
        "category": "/Martial Arts/Headguards",
        "size": "S",
        "stock": 15,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Headguard",
        "price": 80,
        "category": "/Martial Arts/Headguards",
        "size": "M",
        "stock": 20,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Helmet",
        "price": 60,
        "category": "/Martial Arts/Headguards",
        "size": "S",
        "stock": 15,
        "description": "Lorem ipsum"
    },
    {
        "brand": "Everlast",
        "name": "Helmet",
        "price": 60,
        "category": "/Martial Arts/Headguards",
        "size": "M",
        "stock": 10,
        "description": "Lorem ipsum"
    }
];


const indexes = `{ "stock": 1, "category": 1 }`;


module.exports.products = products;
module.exports.indexes = indexes;