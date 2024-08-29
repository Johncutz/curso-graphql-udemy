const db = require("../config/db");

async function salvarUsuario(nome, email, senha) {
  // return usuario
}

async function salvarPerfil(nome, rotulo) {
  // return perfil
}

async function adicionarPerfis(usuario, ...perfis) {
  // for(perfil os perfis) {...}
}

async function executar() {
  const usuario = await salvarUsuario("Ana", "ana@empresa.com.br", "12345");
  const perfilA = await salvarPerfil("rh", "Pessoal");
  const perfilB = await salvarPerfil("fin", "Financeiro");

  console.log(usuario);
  console.log(perfilA);
  console.log(perfilB);

  await adicionarPerfis(usuario, perfilA, perfilB);
}

executar()
  .catch((err) => console.log(err))
  .finally(() => db.destroy());
