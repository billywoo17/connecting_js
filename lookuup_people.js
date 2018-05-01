const pg = require("pg");
const settings = require("./settings"); // settings.json
var moment = require('moment');
moment().format();
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const input = process.argv[2];
// console.log(input);



client.connect();

client.query("SELECT * FROM famous_people WHERE first_name = '"+ input +"' OR last_name = '" + input + "'" , (err, result) => {
  if (err) {
    return console.error("error running query", err);
  };
  console.log(`found ${result.rows.length} person(s) by the name '${input}' :`);

  result.rows.forEach(function (obj, index) {
    console.log(`- ${index +1 }: ${obj.first_name} ${obj.last_name}, born '${moment(obj.birthdate).format("Y-MM-DD")}'`);

  });
  client.end();
});
