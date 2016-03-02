var GoogleContacts = require('./').GoogleContacts;

var c = new GoogleContacts({
    token: 'ya29.mQJIHI_kGtIArqlBwsjEMONK5gbJpJdI4z-lF4mxSWuYrsYmGlstljyqCkagZfQ_xLY',
    thin: false,
    projection: 'full',
    email: 'willy@callinize.com',
    id: '72d704900eeb5db7'
});

c.getContact(function (err, contacts) {
    console.log(err)
    if (err) throw err;
    console.log(contacts);
});
