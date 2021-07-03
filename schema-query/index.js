const { ApolloServer, gql } = require('apollo-server');


const usuarios = [{
    id: 1,
    nome: "João Cícero Vicente Sousa",
    email: "joao@gmail.com",
    idade: 26,
    salario_real: 6000.56,
    vip: true
}, {
    id: 2,
    nome: "Franci Iara Sousa",
    email: "francini@gmail.com",
    idade: 300,
    salario_real: 6000.56,
    vip: true
},{
    id: 3,
    nome: "João Cícero Vicente Sousa",
    email: "joao@gmail.com",
    idade: 26,
    salario_real: 6000.56,
    vip: true
}
]

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
        id: ID!
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
        usuarios: [Usuario]!
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
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
            return produto.preco - (produto.desconto * produto.preco);
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
                desconto: 0.15
            }
        },
        numerosMegaSena() {
            const crescente = (a, b) => a - b;
            return Array(6).fill(0)
                .map(n => parseInt(Math.random() * 60 + 1))
                .sort(crescente);
        },
        usuarios(){
            return usuarios;
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
