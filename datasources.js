const { MongoDataSource } = require("apollo-datasource-mongodb");

class Products extends MongoDataSource {
    productById(id) {
        console.log("id = " + id);
        return this.findOneById(id);
    }
}

class User extends MongoDataSource {
    getUserById(id) {
        console.log("id = " + id);
        return this.findOneById(id);
    }
}

module.exports = {
    Products,
    User
}