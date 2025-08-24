const express = require('express')
const User = require('../mongoose-models/user_collection')
const userRouter = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


userRouter.post('/signup',async (req, res, next)=>{
    const {name, email, password, role}=req.body
try{
    const user=await User.findOne({email :email})
    if(user){
        return res.status(403).json({error:"User already registered. Try to login"})
    }
    let hashedPassword;
    let token;
    try{
    hashedPassword = await bcrypt.hash(password,12) // 12 is a value to represent how strong your hash is, we choose 12 because it also generates in some time. The more the value it takes more time to generate
    }
    catch(err){
        res.status(400).json({error: err})
    }
    try{
token = jwt.sign({userId:user.id, email: user.email},"secret_dont_share",{expiresIn: 
    '1hr'
})


    }
    catch(err){
res.status(400).json({error: err})
    }
const signupuser= new User({
    name : name,
    email : email,
    password : hashedPassword,
    role : role
})

await signupuser.save()
res.status(201).json({message : "Registered successfully", userId:user.id, email: user.email, token : token})
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
//     let isValidPassword;
//     if(user.email){
//         try{
//             isValidPassword = await bcrypt.compare(password, user.password)
//         }
//         catch(err){
// res.status(400).json({error : err})
//         }
//         if(!isValidPassword){
//             return res.status(403).json({error : "Invalid Password"})
//         }
//         else{

//         }
let token;
if(!user.email){
return res.status(403).json({error : "Email Id does not exist. Please register"})
}
let isValidPassword = false;
try{
isValidPassword = await bcrypt.compare(password, user.password)
}
catch(err){
return res.status(500).json({message : "Please check your credentials and try again"})
}
        if(isValidPassword){
              try{
token = jwt.sign({userId:user.id, email: user.email},"secret_dont_share",{expiresIn: 
    '1hr'
})
    }
    catch(err){
res.status(400).json({error: err})
    }
            if(user.role==="admin"){
                return res.status(200).json({message:"Login successful", userId:user.id, email: user.email, role:"admin", token:token})
            }
            return res.status(200).json({message:"Login successful",  userId:user.id, email: user.email, role:"user", token : token})
        }
        else{
           return res.status(403).json({error : "Invalid Password"})
        }
        
    }
    


catch(err){
res.status(400).json({error: "Something went wrong. Please try again later."})
}
})

module.exports = userRouter