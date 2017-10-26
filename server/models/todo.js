var mongoose = require('mongoose');

var ToDo = mongoose.model('ToDo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newToDo = new ToDo({
//     text: 'Cook Dinner'
// });

// newToDo.save().then((doc) => {
//     console.log('Saved ToDo : ', doc);
// }, (err) => {
//     console.log('unable to save todo', err);
// });

// var newToDo2 = new ToDo({
//     text: 'Got to bed',
//     completed: false,
//     completedAt: 222
// });
// newToDo2.save().then((doc) => {
//     console.log('Saved ToDo : ', doc);
// }, (err) => {
//     console.log('Unable to save todo', err);
// });

module.exports = { ToDo };