var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mysql = require('mysql')

var main = require('./router/main')
var search = require('./router/search')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'psh5746',
    database: "myweb"
})

connection.connect();

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs')

app.use('/main',main)
app.use('/search',search)

app.listen(3000, function(){
    console.log("start, express server on 3000")
})

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html")
})
