const { MongoDataSource } = require("apollo-datasource-mongodb");

class Products extends MongoDataSource {
  getProductById(id) {
    return this.findOneById(id);
  }
}

module.exports = {
  Products,
};
