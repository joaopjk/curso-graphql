const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql` 
    # Portas de entrada da API. O sinal ! obriga o retorno(não pode ser nullo)
    type Query {
        ola:String
    }
`
const resolvers = {
    Query: {
        ola() {
            return "Olá mundo!";
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando na porta ${url}`);
})