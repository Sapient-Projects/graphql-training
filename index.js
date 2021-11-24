const { ApolloServer, gql } = require("apollo-server");
const { products } = require("./data");
const { Products } = require("./datasources");
const { client } = require("./util");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Int!
  }

  type Query {
    sayHello: String!
    productById(id: ID!): Product
  }
`;

const resolvers = {
  Query: {
    sayHello: () => {
      return "Hello";
    },

    productById: (_, args, context) => {
      return context.dataSources.products.getProductById(args.id);
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    products: new Products(client.db().collection("products"))
  }),
});

server
  .listen(4001)
  .then(() => console.log("server started!"))
  .catch((err) => console.log(err));
