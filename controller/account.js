var model=require('../model/accountmodel.js')
var promise = require('promise');
const childProcess = require('child_process');

exports.checkEmail = (req, res) => {
var email=req.body.email;
model.mailvalidate(email, function(result) {
    res.send(result)
})
    

}