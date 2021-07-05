const { usuarios, proximoId } = require('../data/db');

function indiceUsuario(filtro) {
    if (!filtro) return -1;

    const { id, email } = filtro;
    if (id)
        return usuarios.findIndex(u => u.id === id);
    if (email)
        return usuarios.findIndex(u => u.email === email);

    return -1;
}

module.exports = {
    novoUsuario(_, { dados }) {
        const emailExistente = usuarios.some(u => u.email = dados.email);

        if (emailExistente)
            throw new Error("Email já cadastrado !");

        const novo = {
            id: proximoId(),
            nome: dados.nome,
            email: dados.email,
            idade: dados.idade,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo);
        return novo;
    },

    excluirUsuario(_, { filtro }) {
        const i = indiceUsuario(filtro);

        if (i < 0) return null;

        const excluidos = usuarios.splice(i, 1);

        return excluidos ? excluidos[0] : null;
    },

    alterarUsuario(_, { dados }) {
        const i = usuarios.findIndex(u => u.id === id);

        if (i < 0) return null;

        const usuario = {
            ...usuarios[i],
            ...dados
        }

        usuarios.splice(i, 1, usuario);
    }
}