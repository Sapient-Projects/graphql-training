const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://pradubey7:admin@localhost/demo?authSource=admin");
client.connect().then(() => console.log("connected to db..."))

module.exports = {
    client
}