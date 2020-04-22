
exports.up = function(knex) {
  return knex.schema.createTable('photo', table=>{
    table.increments('id')
    table.string('photo_url')
    table.string('photo_name')
    table.string('short_description')
    table.string('long_description')
    table.string('place_taken')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('photo')
}
