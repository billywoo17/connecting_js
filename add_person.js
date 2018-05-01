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


const first_name = process.argv[2];
const last_name = process.argv[3];
const birthdate = process.argv[4];



knex('famous_people')
  .select('*')
  .insert([{first_name: first_name, last_name: last_name, birthdate: birthdate}])
  .returning('*')
  .asCallback(function (err, result){
    console.log(result);
  })


