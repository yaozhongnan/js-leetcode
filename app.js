const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes')

const port = 3000;

app.set('views', path.join(__dirname, './views'));
app.engine('html', require('ejs').__express);  
app.set('view engine', 'html');

app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use(router)

app.listen(port, () => console.log(`app listening on port ${port}!`))