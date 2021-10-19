const jwt=require('jsonwebtoken')
require('dotenv').config()


const generateToken=(userID)=>{
return jwt.sign({id:userID} , process.env.JWT_SECRET_KEY ,{ expiresIn:'30d',}
)}

module.exports= generateToken