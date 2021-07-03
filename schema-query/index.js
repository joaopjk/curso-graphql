const { ApolloServer, gql } = require('apollo-server');


const usuarios = [{
    id: 1,
    nome: "João Cícero Vicente Sousa",
    email: "joao@gmail.com",
    idade: 26,
    salario_real: 6000.56,
    vip: true,
    perfil_id: 1
}, {
    id: 2,
    nome: "Franci Iara Sousa",
    email: "francini@gmail.com",
    idade: 300,
    salario_real: 6000.56,
    vip: true,
    perfil_id: 3
}, {
    id: 3,
    nome: "João Cícero Vicente Sousa",
    email: "joao@gmail.com",
    idade: 26,
    salario_real: 6000.56,
    vip: true,
    perfil_id: 2
}]

const perfis = [{
    id: 1,
    nome: 'Junior'
}, {
    id: 2,
    nome: "Pleno"
}, {
    id: 3,
    nome: 'Senior'
}]

const typeDefs = gql` 
    scalar Date

    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        perfil: Perfil
    }

    type Produto {
        id: ID!
        nome: String!
        preco: String!
        desconto: Float
        precoComDesconto: Float
    }

    type Perfil{
        id: ID!
        nome: String!
    }

    # Portas de entrada da API. O sinal ! obriga o retorno(não pode ser nullo)
    type Query {
        ola: String
        horaCerta: Date
        usuarioLogado: Usuario
        usuarios: [Usuario]!
        usuario(id:ID): Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        perfil(id: Int): Perfil
        perfis: [Perfil]
    }
`
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        },
        perfil(usuario) {
            const perfil = perfis.filter(p => p.id === usuario.perfil_id);
            return perfil ? perfil[0] : null;
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
        usuarios() {
            return usuarios;
        },
        usuario(_, { id }) {
            const selecionados = usuarios.filter(x => x.id == id);
            return selecionados ? selecionados[0] : null;
        },
        perfis() {
            return perfis;
        },
        perfil(_, { id }) {
            perfil = perfis.filter(p => p.id == id)
            return perfil ? perfil[0] : null;
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
