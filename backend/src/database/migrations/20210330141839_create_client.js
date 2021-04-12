
exports.up = function(knex) {
    return knex.schema.createTable('client', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('RG').notNullable();
        table.string('CPF').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('district').notNullable();
        table.string('street').notNullable();
        table.integer('number').notNullable();
        table.integer('box_number').notNullable();
        table.string('images').notNullable(); 

        table.integer('salesman_id').notNullable();
        table.integer('internet_plan_id').notNullable();
  
      table.foreign('salesman_id').references('id').inTable('salesman');
      table.foreign('internet_plan_id').references('id').inTable('internet_plan');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('client');  
};
