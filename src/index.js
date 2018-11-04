import { GraphQLServer } from 'graphql-yoga'

//Type Definitions (schema)
 const typeDefs = `
    type Query {
      hello: String!
      location: String!
      bio: String!
      name: String
      age: Int
      rating: Float
    }
 `
//Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!'
    },
    location() {
      return 'Sarasota, FL, 34238'
    },
    bio() {
      return 'Hi, I\'m Mathias, a Developer from Sarasota!'
    },
    name(){
      return 'Tim'
    },
    age(){
      return 29
    },
    rating(){
      return 4.5
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => {
  console.log('The Server is up!')
})