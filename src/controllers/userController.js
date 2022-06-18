const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//=================================================================
const createUser = async function (req, res) {
try{
  let data = req.body;
  
  let savedData = await userModel.create(data);
 
  res.status(201).send({ msg: savedData });
}catch(err){
  //for getting server error 
  console.log("This is error msg", err.message)
  res.status(500).send({msg:error,error:err.message})
}
}
//===================================================================
const loginUser = async function (req, res) {
  try{
    let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

 
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.status(200).setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });
}catch(err) {
  console.log("Server error")
  res.status(500).send({msg: "missing login credintials", err:message})
}
}
//=========================================================================
 const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.staus(401).send({ status: false, msg: "token must be present" });

  console.log(token);
  
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(403).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}catch(err){
  console.log("can't access")
  res.status(500).send({ msg: "check connection", err: messages})
}
}

//===========================================================================

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};
//============================================================================

const deleteUser = async function(req,res){
  let userId = req.param.userId;
  let user = await userModel.findById(userId);
  if(!user) {
    return res.send("No such user exists");
   }
   //let userData = req.body;
   let deleteUser = await userModel.findOneAndUpdate({_id: userId}, {new:true});
   res.send({status: deleteUser, data: deleteUser});
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
