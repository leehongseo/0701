const express= require('express');
const path = require('path');
const conf = require('./conf/conf');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(conf.head);

const uc=require('./controller/user_cont');
//const umc=require('./controller/user_mongo_cont');
app.use('/api/users',uc);
//app.use('/api/musers',umc);
app.get('/*',conf.html);


app.use(express.static(__dirname + '/dist/ang-boot-app')); // use라면 메소드 상관없다
// url , uri의 차이점 : url는 해당파일이 진짜 있는것 uri는 자원상 있는것
// express와 앵귤러의 router는 거의 비슷한데 동작은 다르다.


app.get('/api/companies',function(req,res,next){
    let companyList =[
        {name:'test1',year:199,address:'주소1'},
        {name:'test2',year:198,address:'주소2'},
        {name:'test3',year:197,address:'주소3'},
        {name:'test4',year:196,address:'주소4'}
    ];
    res.json(companyList); // json이 해주는 역할은 데이터를 객체화 해준다. 
});




app.get('/api/list',function(req,res,next){
    let type = req.query.type;
    let list = [];
    if(type ==='name'){
        list = getUsers();
    }else if(type==='year'){
        list =getAnimals();
    }else if(type==='address'){
        list =getCompters();
    }
    let result ={};
    result[type] = list;
    res.json(result);
});
function getUsers(){
    return [
        {name:'이름',age:3},
        {name:'이름',age:312},
        {name:'이름',age:3551},
        {name:'이름',age:663}
    ];
}
function getAnimals(){
    return [
        {name:'생년',age:3},
        {name:'생년',age:312},
        {name:'생년',age:3551},
        {name:'생년',age:663}
    ];
}
function getCompters(){
    return [
        {name:'주소',age:3},
        {name:'주소',age:312},
        {name:'주소',age:3551},
        {name:'주소',age:663}
    ];
}

app.get('/test',function(req,res,next){ //  get이라 되어있으면 get만 된다. post가 안된다.
    res.write('test!!');
    res.end();
});

/*app.get('/api/users',function(req,res,next){
    console.log(req.query); // head로 보낼땐 get body로 보낼땐 포스트로 보낸다. 그래서 req.body라고 할수도있다.
    next();
});*/
// http://localhost:3000/api/users?name=test&num=1    // 이게 uri에서의 쿼리 

app.get('/api/login',function(req,res,next){
    let id= req.query.id;
    let pwd = req.query.pwd;
    let result={isLogin:false};
    if(id=='test'){
        if(pwd=='test'){
            result = {isLogin:true};

        }
    }
    res.json(result);
});

app.get('/api/users',function(req,res,next){
    let userList =[
        {name:'test1',age:3},
        {name:'test221',age:312},
        {name:'tes142t1',age:3551},
        {name:'tes4363t1',age:663}
    ];
    res.json(userList); // json이 해주는 역할은 데이터를 객체화 해준다. 
});

// 콜백지옥을 탈피하기위한 방법이 프라미스방식
// 자바스크립트 es06에서 지원하는 방식도 있다. 이렇게 2가지
app.get('/*',function(req,res,next){
    console.log(req.method);
    res.sendFile(path.join(__dirname+'dist/ang-boot-app/index.html'));
    next();
});
var port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0",function(){
    console.log("Listening on Port 3000");
});