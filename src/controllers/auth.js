// const jwt = require("jsonwebtoken")
// const userModel = require("../models/userModel")

// const authenticate = function(req,res,next){
//     //check the token in request header
//     //validate this token
//     let token = req.headers["x-auth-token"]
//     if(!token) return res.send({status: false, msg: "token must be present in the request header"})
//     let decodedToken = jwt.verify(token, 'functionup-radon')
//     if(!decodedToken) return res.send({status: false, msg: "token is not valid"})

//     next()
// }

// module.exports.authenticate = authenticate