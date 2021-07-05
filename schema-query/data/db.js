let id = 1;
function proximoId() {
    return id++;
}

const usuarios = [{
    id: proximoId(),
    nome: "João Cícero Vicente Sousa",
    email: "joao@gmail.com",
    idade: 26,
    salario_real: 6000.56,
    vip: true,
    perfil_id: 1,
    status: "ATIVO"
}, {
    id: proximoId(),
    nome: "Franci Iara Sousa",
    email: "francini@gmail.com",
    idade: 300,
    salario_real: 6000.56,
    vip: true,
    perfil_id: 3,
    status: "INATIVO"
}, {
    id: proximoId(),
    nome: "João Cícero Vicente Sousa",
    email: "joao@gmail.com",
    idade: 26,
    salario_real: 6000.56,
    vip: true,
    perfil_id: 2,
    status: "BLOQUEADO"
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

module.exports = { usuarios, perfis, proximoId }
