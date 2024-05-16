
exports.up = function(knex) {
    return knex.schema.createTable('resenha', (table) => {
        table.increments('id').primary();
        table.string('livro').notNullable();
        table.string('titulo_da_resenha').notNullable();
        table.string('conteudo').notNullable();
        table.integer('nota').notNullable();
        table.integer('usuario_id').unsigned().references("id").inTable('usuario').onDelete('CASCADE');
        table.string('imagem');
      })
   };

exports.down = function(knex) {
    return knex.schema.dropTable('resenha');
};