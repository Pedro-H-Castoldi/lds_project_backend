exports.up = function(knex) {
    return knex.schema.createTable('salesman', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.string('RG').notNullable();
      table.string('CPF').notNullable();
      table.integer('sales_goal').notNullable();
      table.integer('sales_amount').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
      table.string('district').notNullable();
      table.string('street').notNullable();
      table.integer('number').notNullable();
  
      table.integer('admin_id').notNullable();
  
      table.foreign('admin_id').references('id').inTable('admin');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('salesman');
  };