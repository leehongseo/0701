const express= require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/ang-boot-app'));

app.get('/*',function(req,res,next){
    console.log(req.method);
    res.sendFile(path.join(__dirname+'dist/ang-boot-app/index.html'));
    next();
});
var port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0",function(){
    console.log("Listening on Port 3000");
});