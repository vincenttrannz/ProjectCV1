
exports.up = function(knex) {
  return knex.schema.createTable('contacts', (table)=>{
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('message')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts')
};