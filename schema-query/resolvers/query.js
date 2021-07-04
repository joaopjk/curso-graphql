const { usuarios, perfis } = require('../data/db');

module.exports = {
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
