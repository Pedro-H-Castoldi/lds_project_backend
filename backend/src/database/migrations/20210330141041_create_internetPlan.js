
exports.up = function(knex) {
    return knex.schema.createTable('internet_plan', function (table) {
        table.increments('id').primary();
        table.float('price').notNullable();
        table.string('speed').notNullable();
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('internet_plan')
};