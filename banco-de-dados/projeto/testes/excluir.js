const db = require("../config/db");

// se o dado tiver relacionamentos, não dará para você excluir desta forma.

// excluir por id
db("usuarios")
  .where({ id: 1 })
  .delete()
  .then((res) => console.log(res))
  .finally(() => db.destroy());

// excluir tudo
db("perfis")
  .delete()
  .then((res) => console.log(res))
  .finally(() => db.destroy());
