const jwt = require("jsonwebtoken");

const midWare = async function (req, res, next) {
try{
    
    let token = req.headers["x-auth-token"];
    if(!token) token = req.headers["x-auth-token"];

    if (!token) return res.status(400).send({ status:false, msg: "token must be present"});

    console.log(token)
    let decodedToken = jwt.verify(token, "functionup-radon")
    if(!decodedToken){
        return res.status(403).send({ status: false, msg: "token is invalid"})
    }else{
        next()
    }
}catch(err){
    console.log("This is a error: ", error.message)
    res.status(500).send({status:false, msg: "Server error", error: err})
}
}

//================================================================================

const authorise = function (req,res, next) {
try{
    //token req in header

    let token = req.headers["x-auth-token"]
    
    //token decoded
    let decodedToken = jwt.verify(token, 'functionup-radon')
    
    //for modificationreq userid in params
    let userToBeModified = req.params.userId
    
    //userId for the logged_In user
    let userLoggedIn = decodedToken.userId

    //verification of userloggedIn
    if(userToBeModified != userLoggedIn)
    return res.status(403).send({status: true, msg: "user logged in is not allowed to modify request content"})

    next()
}catch(err){
    console.log("This is a error: ", error.message)
    res.status(500).send({status:false,msg: "Server error", error: err})
}
}


module.exports.midWare = midWare
module.exports.authorise = authorise