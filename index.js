const express=require("express")
var login_routes = require('./login')
const bodyParser=require("body-parser")

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app=express()
var path = require('path');
app.set('view engine','pug')
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.post('/login',urlencodedParser,login_routes.handle_login) 
var accounts = require('./controller/account')
var search=require('./controller/itemsearch')
app.post('/items/search',urlencodedParser,search.searchitems)
app.post('/account/checkemail',urlencodedParser,accounts.checkEmail)
app.use(express.static(path.join(__dirname,'public')))

var server=app.listen(3030,()=>{
console.log('server started')
});