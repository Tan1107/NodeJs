var express = require('express')
var app = express();

var port = 3000

app.get('/', function(request, response){
    response.send("<h1>hello may</h1>")
})
app.get('/user', function(request, response){
    response.send("<h1>hello may thang user</h1>")
})
app.get('/customer', function(request, response){
    response.send("<h1>hello may thang customer</h1>")
})

//GET, POST, REQUEST

app.listen(port, function(){
    console.log("start server on port 3000")
})
// tesrt commit