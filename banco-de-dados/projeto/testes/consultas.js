const db = require("../config/db");

// Forma de consultar os dados da tabela inteira
// db("perfis").then((res) => console.log(res)).finally(() => db.destroy());

// Forma de fazer um map e criar um array com apenas os nomes.
// db("perfis")
//   .then((res) => res.map((p) => p.nome))
//   .then((nomes) => console.log(nomes))
//   .finally(() => db.destroy());

// Forma de filtra os dados do banco de dados, trazendo apenas os nomes e id.
// db("perfis")
//   .select("nome", "id")
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// Forma de busca os dados de nome e id da tabela perfis mais semelhante a forma sql.
// db.select("nome", "id")
//   .from("perfis")
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// Limita o retorno dos dados para apenas 4 e o offset é utilizado para parâmetro para o índice inicial, sendo 0 como default, então ele irá pular 2 elementos.
// db.select("nome", "id")
//   .from("perfis")
//   .limit(4)
//   .offset(2)
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// Retorna um array com apenas um objeto sendo os dados apenas da linha 2
// db("perfis")
//   .where({ id: 2 })
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// Retorna um objeto com os dados apenas da linha 2
// db("perfis")
//   .where({ id: 2 })
//   .first()
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

db("perfis")
  //   .where({ id: 2 })
  //   .where("id", "=", "2") // Faz a mesma coisa que o where acima
  //   .where("nome", "like", "%m%") // Traz um array com os objetos que tem o nome com a letra 'm'
  //   .whereNot({ id: 2 }) // Retorna todos os elementos que não tem o id 2
  //   .whereIn("id", [1, 2, 3]) // Retorna os dados dos elementos com id 1, 2 e 3
  //   .first()
  .then((res) => console.log(res))
  .finally(() => db.destroy());
