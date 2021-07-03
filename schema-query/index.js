const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql` 
    scalar Date

    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Portas de entrada da API. O sinal ! obriga o retorno(não pode ser nullo)
    type Query {
        ola: String
        horaCerta: Date
        usuarioLogado: Usuario
    }
`
const resolvers = {
    Query: {
        ola() {
            return "Olá mundo!";
        },
        horaCerta() {
            return new Date;
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: "João Cícero Vicente Sousa",
                email: "joao@gmail.com",
                idade: 26,
                salario: 6000.00,
                vip: true
            }
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