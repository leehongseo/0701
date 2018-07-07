const express= require('express');
const path = require('path');
const conf = require('./conf/conf');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/dist/ang-boot-app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(conf.head);

const uc=require('./controller/user_cont');
//const umc=require('./controller/user_mongo_cont');
app.use('/api/users',uc);
//app.use('/api/musers',umc);
app.get('/*',conf.html);

 // use라면 메소드 상관없다
// url , uri의 차이점 : url는 해당파일이 진짜 있는것 uri는 자원상 있는것
// express와 앵귤러의 router는 거의 비슷한데 동작은 다르다.


var port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0",function(){
    console.log("Listening on Port 3000");
});