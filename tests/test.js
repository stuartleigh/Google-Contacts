/*jslint indent:2*/
/*global require: true, console: true */
var GoogleContacts = require('../').GoogleContacts;
var assert = require('assert');
var contactsTested = false;
var contactTested = false;

var c = new GoogleContacts({
  token: process.env.GOOGLE_TOKEN,
  id: process.env.GOOGLE_CONTACT_ID
});

c.getContacts(function (err, contacts) {
  if (err) throw err;
  assert.ok(typeof contacts === 'object', 'Contacts is not an object');
  console.log(contacts);
  contactsTested = true;
});

c.getContact(function (err, contact) {
  if (err) throw err;
  assert.ok(typeof contact === 'object', 'Contact is not an object');
  console.log(contact);
  contactTested = true;
});

process.on('exit', function () {
  if (!contactsTested || !contactTested) {
    throw new Error('contact test failed');
  }
});
