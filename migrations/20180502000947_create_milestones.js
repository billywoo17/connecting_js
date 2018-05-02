exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable('famous_people', function(table){
        table.increments('id').primary();
        table.string('description');
        table.date('date_achieved');
      })
      .createTable('milestones', function(table){
        table.increments('id').primary();
        table.string('description');
        table.date('date_achieved');
        table.integer('famous_person_id');

      })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones').dropTable('famous_people')
  ]);
};