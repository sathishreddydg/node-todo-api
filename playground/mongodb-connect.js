const MongoClient = require('mongodb').MongoClient;
//ES6 feture : Object de-structuring
//const {MongoClient,ObjectID} = require('mongodb');
//By calling ObjectID() constructor we can generate new unique ID like in MongoDB _id
// var obj=new ObjectID();
// console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        //Here retrun statement will stap the functoin here it self
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('ToDos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable o insert ToDo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Sathish',
    //     age: 24,
    //     location: 'Edison, NJ'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert the User', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.close();
});