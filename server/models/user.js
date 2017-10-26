var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var newUser = new User({
//     email: 'sat@gmaail.com'
// });

// newUser.save().then((doc) => {
//     console.log('Saved user: ', doc);
// }, (err) => {
//     console.log('unable to save user', err);
// });

module.exports = { User };

