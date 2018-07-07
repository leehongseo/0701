var express = require('express');
var router = express.Router();
var us = require('../service/user_serv');

router.get('/',selectUser);
router.post('/login',loginuser);
module.exports=router;

function selectUser(req,res,next){
    us.getUser()
    .then((result)=>{
        console.log(result);
        res.json(result);
    }).catch(result=>{
        console.log(result);
        res.json(result);
    });
}
function loginuser(req,res,next){
    console.log(req.body);
    let user = req.body;
    let fResult = {login:true};
    us.getUser(user)
    .then((result)=>{
        console.log(result);
        res.json(result);
    }).catch(result=>{
        console.log(result);
        res.json(result);
        }
    )
    if(user.id=='test'){
        if(user.pwd=='test'){
            us.getUsers()
            .then((result)=>{
                fResult["userList"] = result;
                res.json(fResult);
            }).catch(result=>{
                console.log(result);
                res.json(result);
            });
        }
    }
}