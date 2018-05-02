
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('milestones', function(table){
    table.foreign('famous_person_id').references('famous_people.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('milestones', function(table){
    table.dropForeign('famous_person_id');
  });
};
