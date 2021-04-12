
exports.up = function(knex) {
    return knex.schema.createTable('contract', function (table) {
        table.increments('id').primary();
        table.integer('salesman_id').notNullable();
        table.integer('client_id').notNullable();
        table.integer('internet_plan_id').notNullable();

        table.foreign('salesman_id').references('id').inTable('salesman');
        table.foreign('client_id').references('id').inTable('client');
        table.foreign('internet_plan_id').references('id').inTable('internet_plan');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('contract');  
};
