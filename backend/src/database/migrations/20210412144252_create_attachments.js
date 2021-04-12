exports.up = function(knex) {
    return knex.schema.createTable('attachments', function (table) {
        table.increments('id').primary();
        table
        .integer('client_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('client')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('url', 100).notNullable();
      table.timestamps();
    });
};
  
exports.down = function(knex) {
  return knex.schema.dropTable('attachments');
}