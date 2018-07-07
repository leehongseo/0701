var userService ={};
module.exports = userService;
userService.getUser = getUser;
userService.getUsers = getUsers;

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/test';
mongoose.connect(url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));
db.once('open',function(){
    console.log('Connection ok!');
});

function getUsers(po){
    return new Promise(function(resolve,reject){
        var collection = db.collection('user');
        collection.find(po).toArray(function(err,items){
            if(err){
                reject(err);
            }else{
                console.log(items);
                resolve(items);
            }
        })
    })
}

function getUser(user){
    return new Promise(function(resolve,reject){
        var collection = db.collection('user');
        collection.find(user).toArray(function(err,items){
            if(err){
                reject(err);
            }else{
                console.log(items);
                resolve(items);
            }
        });
    });
}