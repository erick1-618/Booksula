exports.up = function(knex) {
    return knex.schema.createTable('resenhas_favoritadas', (table) => {
        table.integer('usuario_id').unsigned().references("id").inTable('usuario');
        table.integer('resenha_id').unsigned().references("id").inTable('resenha');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("resenhas_favoritadas");
};
