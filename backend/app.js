const express = require('express');
const cors = require('cors');
var fs = require('fs');
var picturesDirectory = 'uploads/';

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

const restaurantRoute = require('./routes/restaurant');
const user_adminRoute = require('./routes/user_admin');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');
const menuRoute = require('./routes/menu');
const pedidoRoute = require('./routes/pedido');
const permissionRoute = require('./routes/permission');

app.use(express.json());
app.use('/uploads', express.static('uploads'))

app.use("/restaurants", restaurantRoute);
app.use("/user_admin", user_adminRoute);
app.use("/user", userRoute);
app.use("/images", imageRoute);
app.use("/menu", menuRoute);
app.use("/pedido", pedidoRoute);
app.use("/permission", permissionRoute)

app.post('/imagenes', function(req, res){
	var fileName = `${new Date().getTime()}.jpeg`;
	var picture_url = picturesDirectory + fileName; 
	fs.writeFile(picture_url, req.body.imageUrl, 'base64', function(error){
		if(error) throw error; 
		res.send({picture_url: picture_url})
	})

})

app.use('/imagenes', express.static('uploads')); 



module.exports = app
