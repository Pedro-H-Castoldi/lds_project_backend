
exports.up = function(knex) {
    return knex.schema.createTable('contract', function (table) {
        table.increments('id').primary();
        table.foreign('salesman_id').references('id').inTable('salesman').notNullable();
        table.foreign('salesman_id').references('id').inTable('salesman').notNullable();
        table.foreign('internet_plan_id').references('id').inTable('internet_plan').notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('contract');  
};
