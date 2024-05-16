exports.up = function(knex) {
    return knex.schema.createTable('amizade', (table) => {
        table.increments('id').primary();
        table.string('status').notNullable();
        table.integer('usuario1_ID').unsigned();
        table.integer('usuario2_ID').unsigned();

        table.foreign('usuario1_ID').references('usuario.id');
        table.foreign('usuario2_ID').references('usuario.id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('amizade');
};
