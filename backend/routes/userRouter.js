const express = require('express')
const User = require('../mongoose-models/user_collection')

const userRouter = express.Router()

userRouter.post('/signup',async (req, res, next)=>{
    const {name, email, password}=req.body
try{
    const user=User.findOne({email :email})
    if(user){
        return res.status(403).json({error:"User already registered. Try to login"})
    }
const signupuser= new User({
    name : name,
    email : email,
    password : password
})

await signupuser.save()
res.status(200).json({message: "Registered successfully."})
}
catch(err){
    console.log("signup err", err)
res.status(400).json({error: err})
}
})

userRouter.post('/login', async(req, res, next)=>{
    const {email, password} = req.body
try{
    const user= await User.findOne({email: email});
    if(user.email){
        if(user.password===password){
            return res.status(200).json({message:"Login successful"})
        }
        else{
           return res.status(403).json({error : "Invalid Password"})
        }
    }
    else{
       return res.status(403).json({error : "Email Id does not exist. Please register"})
    }

}
catch(err){
res.status(400).json({error: "Something went wrong. Please try again later."})
}
})

module.exports = userRouter