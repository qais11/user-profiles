const express = require('express'); // node freamework
const bodyParser = require('body-parser'); // to parse JSON
const port = 3000; // my port on localhost
const app = express(); // to use the freamework
const path = require('path');
const cors = require('cors'); // to make the users access the view of my website
const session = require('express-session');
const config = require('./config.js');
const userCtrl = require('./controllers/userCtrl.js')
const profileCtrl = require('./controllers/profileCtrl.js')
app.use(bodyParser.json()) // useing json middelware


var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(cors(corsOptions)) //useing cors
app.use(session({secret:config.sessionSecret}))
app.use('/api/login' , userCtrl.login);
app.get('/api/findFriend' ,profileCtrl.findFriend)
app.use(express.static(__dirname + '/public'));


app.listen(port , function(){
  console.log(`listening to the port ${port}`)
})
