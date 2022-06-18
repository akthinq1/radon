const jwt = require("jsonwebtoken");

const midWare = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if(!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ status:false, msg: "token must be present"});

    console.log(token)
    let decodedToken = jwt.verify(token, "functionup-radon")
    if(!decodedToken){
        return res.send({ status: false, msg: "token is invalid"})
    }else{
        next()
    }
}

module.exports.midWare = midWare