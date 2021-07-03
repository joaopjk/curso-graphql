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

    type Produto {
        id: Int
        nome: String!
        preco: String!
        desconto: Float
        precoComDesconto: Float
    }

    # Portas de entrada da API. O sinal ! obriga o retorno(não pode ser nullo)
    type Query {
        ola: String
        horaCerta: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
    }
`
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        }
    },
    Produto: {
        precoComDesconto(produto) {
            return produto.preco - produto.desconto;
        }
    },
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
                salario_real: 6000.56,
                vip: true
            }
        },
        produtoEmDestaque() {
            return {
                id: 1,
                nome: "Nootbook",
                preco: 4000.10,
                desconto: 100
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Executando na porta ${url}`);
});
