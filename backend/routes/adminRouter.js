const express = require('express')
const Package = require('../mongoose-models/package_collection')

const adminRouter = express.Router()

const checkAuth = require('../middleWares/check-auth');

adminRouter.use(checkAuth);


adminRouter.get('/',async(req, res, next)=>{
    try{
const getPackage = await Package.find()
res.status(200).json({getPackage})
    }
    catch(err){
res.status(400).json({error : err})
    }
})
adminRouter.post('/',async(req, res, next)=>{
    try{
const packages = new Package(req.body)
await packages.save();
res.status(200).json({message: "Package saved successfully"})
    }
    catch(err){
res.status(400).json({error : err})
    }
})

adminRouter.patch('/:id',async(req, res, next)=>{
    const {id} = req.params
    try{
const package = await Package.findByIdAndUpdate(id, req.body)
if(!package){
    res.status(403).json({error : 'Could not find the package'})
}
res.status(200).json({message: 'Package Updated successfully'})
    }
    catch(error){
res.status(400).json({error : error.message})
    }
})

adminRouter.delete('/:id',async (req, res, next)=>{
    const {id} = req.params
    try{
const package = await Package.findByIdAndDelete(id);
if(!package){
    res.status(403).json({error: "Id is not found"})
}
res.status(200).json({message : "Package deleted successfully"})
    }

    catch(err){
res.status(400).json({error: err})
    }
})

module.exports= adminRouter
