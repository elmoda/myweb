var express = require('express');
var app = express();

var router = express.Router();
var path = require('path')


router.post('/form', function(req, res){
    //res.send("<h1>'" + req.body.search + "'에 대한 검색결과가 없습니다.<h1>")
    console.log(req.body.search)
    res.render('search',{'search': req.body.search})
})

router.post('/ajax',function(req, res){
    //console.log(req.body.search)
    var search = req.body.search;
    var responeData = {}
    var query = connection.query('select * from user where search=?',[search],function(err, rows){
        if(err) throw err;
        if(rows[0]){
            //console.log("rows" + rows[0].search)
            responeData.result = 'ok'
            responeData.search = rows[0].search;
        } else {
            // console.log("none:" + rows[0])
            responeData.result = 'none';
            responeData.search = "";
        }
        res.json(responeData)
    })
    
})

module.exports = router;