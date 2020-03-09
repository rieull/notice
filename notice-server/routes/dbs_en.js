var express = require('express');
var router = express.Router();
var connection = require('./sqlcon');

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('select * from notice_en  ORDER BY IDX DESC',
    function(err,rows){
        if(err) throw err;
        // console.log('The solution is:',JSON.parse(JSON.stringify(rows))[0].CONTENTS);
        res.send(JSON.parse(JSON.stringify(rows)));
    });
});

module.exports = router;