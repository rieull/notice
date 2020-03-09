var mysql = require('mysql');

var config={
    host: 'smartdiagnosisinc01.c5zfhvsipr22.ap-northeast-2.rds.amazonaws.com',
    user :'root',
    password: 'Ak4TQPMYsLJXdCe7',
    database:'cardivu',
    port:3306
};

var connection = mysql.createConnection(config);

module.exports = connection;