const { MongoClient } = require("mongodb");

const mongodbConnectionString = `mongodb://localhost:27017/demo`;
const client = new MongoClient(mongodbConnectionString);
client.connect();

module.exports = {
    client
}