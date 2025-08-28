const express = require('express');
const userRouter = new express.Router()
const Bookings = require('../mongoose-models/booking_collection');


userRouter.get('/bookings/:id', async(req, res)=>{
    const {id} = req.params;
    try{
        const book = await Bookings.find({userId : id }).populate("packageId","name price destinations" ).populate("userId", "name email")

        res.status(200).json({bookingData : book})
    }
    catch(err){
        res.status(400).json({error : err})
    }
})

userRouter.post('/bookings', async(req, res)=>{
    const {body} = req
    try{
const book = new Bookings(
body)

await book.save();
res.status(201).json({message: "Booked successfully"})
    }
    catch(err){
        res.status(400).json({error: err})
    }

})

module.exports = userRouter;