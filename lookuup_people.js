const settings = require("./settings"); // settings.json
var moment = require('moment');
moment().format();

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }

});


const input = process.argv[2];


knex('famous_people')
  .select('*')
  .where({first_name: input})
  .asCallback( function (err, result){
    if (err) {
      return console.error("error running query", err);
    }
    console.log(`found ${result.length} person(s) by the name '${input}' :`);
    result.forEach(function (obj, index) {
      console.log(`- ${index +1 }: ${obj.first_name} ${obj.last_name}, born '${moment(obj.birthdate).format("Y-MM-DD")}'`);
    });
  });







