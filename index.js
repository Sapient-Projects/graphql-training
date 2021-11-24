const { ApolloServer, gql } = require("apollo-server");
const { products } = require("./data");
const { Products, User } = require("./datasources");
const { client } = require("./util");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Int!
  }

  type User {
      id: ID!
      name: String!
  }

  type Query {
    sayHello: String!
    productById(id: ID!): Product
    userById(id: ID!): User!
  }
`;

const resolvers = {
  Query: {
    sayHello: () => {
      return "Hello";
    },

    productById: (_, args, context) => {
        return context.dataSources.products.productById(args.id);
    },

    userById: async (_, args, context) => {
        const userPromise = await context.dataSources.users.getUserById(args.id);
        const user = await userPromise.then
    }
  },
};



const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
      products: new Products(client.db().collection("products")),
      users: new User(client.db().collection("users"))
  }),
});

server
  .listen(4001)
  .then(() => console.log("server started!"))
  .catch((err) => console.log(err));
