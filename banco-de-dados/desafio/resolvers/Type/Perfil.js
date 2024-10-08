const db = require("../../config/db");

module.exports = {
  usuarios(perfil) {
    return db("usuarios")
      .join("usuarios_perfis", "usuarios.id", "usuarios_perfis.usuarios_id")
      .where({ perfil_id: perfil.id });
  },
};
