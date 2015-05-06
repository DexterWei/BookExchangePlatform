var ejs = require("ejs");

var query=require('./dbConnection/sqlQuery');

exports.signin=function(req,res){
	
	var sqlStr="select * from user where email=? and password=?";
	console.log("Query is:"+sqlStr);
	
	var params = [req.param('email'), req.param('password')];
	console.log(req.param('email')+req.param('password'));
	query.execQuery(sqlStr, params, function(err, rows) {
		
		console.log(rows.length);
		if(rows.length !== 0) {
			//var firstname;
			//var lastname;
			
			console.log("rows: "+rows[0].first_name);
			req.session.user_id =rows[0].id;
			//req.session.username =rows[0].username;
			res.json({"login":'Success'})
			
			
		}else{
			//res.send({'errorMessage': "Please enter a valid email and password"});
			console.log("no such user");
			//res.render('signin', {errorMessage: 'Please enter a valid email and password'});
		}
	});
}
	