/**
 * New node file
 * To create mysql connection pool.
 */
var mysql = require('mysql');
var pool  = mysql.createPool({
	  host: 'us-cdbr-iron-east-02.cleardb.net',
	  user: 'b6fdb34b13fc79',
	  password: '81573ca7',
	  database: 'ad_7a5f7dbbaac9577',
	//port     : '3306',
//	database : 'vlibdb',
	  connectionLimit : '2'
});

exports.pool = pool;
