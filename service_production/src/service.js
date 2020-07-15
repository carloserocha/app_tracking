const { GraphQLServer } = require("graphql-yoga")
const Resolvers = require("./resolvers")
const { resolve } = require("path")

const Service = new GraphQLServer({
    typeDefs: resolve(__dirname, "schema.graphql"),
    resolvers: Resolvers
})

const options = {
    port: 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

Service.start(options, ({port}) => {
    console.log(`Server is running on localhost:${port}`)
})