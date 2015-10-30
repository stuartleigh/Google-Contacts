/*jslint indent:2*/
/*global require: true, console: true */
var GoogleContacts = require('../').GoogleContacts;
var assert = require('assert');
var contactsTested = false;

var c = new GoogleContacts({
  token: process.env.GOOGLE_TOKEN,
});

c.getContacts(function (err, contacts) {
  if (err) throw err;
  assert.ok(typeof contacts === 'object', 'Contacts is not an object');
  console.log(contacts);
  contactsTested = true;
});

process.on('exit', function () {
  if (!contactsTested) {
    throw new Error('contact test failed');
  }
});
