
exports.up = function(knex) {
  return knex.schema.createTable('comentario', (table) => {
    table.increments('id').primary();
    table.string('conteudo').notNullable();
    table.integer('usuario_ID').unsigned().references('id').inTable('usuario');
    table.integer('resenha_ID').unsigned().references('id').inTable('resenha');
  })
  }




exports.down = function(knex) {
  return knex.schema.dropTable('comentario');
};
