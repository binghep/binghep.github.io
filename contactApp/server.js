var express = require('express'),
	api		= require('./api'),
	app 	= express();

app
	.use(express.static('./public'))
	.use('/api', api) //prepend every /contact and /contact:id in api routers with /api. so they become /api/contact and /api/contact/id
	.get('*', function (req,res){
		res.sendfile('public/main.html');
	})
	.listen(3000);