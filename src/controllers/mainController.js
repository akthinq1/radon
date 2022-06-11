const {response} = require('express');

const about = function (req,res){
    res.send("Hello my page");
}

const login = function(req,res)
{
    res.send("Hi!, This is login page");
}

const viewProducts = function(req,res){
    res.send("This is Products page");
}

module.exports.about = about;
module.exports.login = login;
module.exports.viewProducts = viewProducts;
