const mongoose= require('mongoose')

const Schema=mongoose.Schema


const packageSchema=new Schema({
  name:{ type : String, required: true},
  description: {type: String},
  price: {type: Number},
 destinations: [String],                 // Array of strings
  availableDates: [Date],                 // Array of dates
  createdAt: { type: Date, default: Date.now }, // Single date with default value
  updatedAt: { type: Date }   

})

module.exports=mongoose.model("Package", packageSchema);

// const Package=mongoose.model("Package" , packageSchema)

// const package= [{
//     name : "Serene Sands Getaway",
//     description: "Escape to the beautiful beaches of Goa. Enjoy the golden sands, turquoise waters, and a vibrant nightlife. Perfect for couples and adventure seekers",
//     destinations: "Baga Beach, Dudhsagar Waterfalls, Panjim City",
//     availableDates: [
//   new Date('2025-02-10'),
//   new Date('2025-03-15'),
//   new Date('2025-04-20')
// ]
// },
// {
//     name : "Himalayan Trek Adventure",
//     description: "Embark on a thrilling trek to the breathtaking Himalayan landscapes. Experience the serenity of nature and challenge yourself with moderate trekking routes",
//     destinations: "Manali, Rohtang Pass, Solang Valley",
//     availableDates: [
//   new Date('2025-03-01'),
//   new Date('2025-04-10'),
//   new Date('2025-05-15')
    
// ]
// }]
// Package.insertMany(package).then(()=>
//     console.log("Package saved successfully")
// ).catch((err)=>{
// console.error("Error saving packages")
// }

// )

