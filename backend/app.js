const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
// const taskRouter=require('./routes/taskRouter')
const Package=require('./mongoose-models/package_collection')
const userRouter = require('./routes/userRouter')
const User = require('./mongoose-models/user_collection')

const url='mongodb://apravin3210:FTfRy9MHfq5wAQF1@cluster0-shard-00-00.g0e5i.mongodb.net:27017,cluster0-shard-00-01.g0e5i.mongodb.net:27017,cluster0-shard-00-02.g0e5i.mongodb.net:27017/?ssl=true&replicaSet=atlas-r9rss6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
    next()
})

app.use('/api/users', userRouter)  

// app.use('/api/tasks', taskRouter)

// const setInitialPackageData=async()=>{
//     const packageData= [{
//         name : "Serene Sands Getaway",
//         description: "Escape to the beautiful beaches of Goa. Enjoy the golden sands, turquoise waters, and a vibrant nightlife. Perfect for couples and adventure seekers",
//         destinations: "Baga Beach, Dudhsagar Waterfalls, Panjim City",
//         availableDates: [
//       new Date('2025-02-10'),
//       new Date('2025-03-15'),
//       new Date('2025-04-20')
//     ]
//     },
//     {
//         name : "Himalayan Trek Adventure",
//         description: "Embark on a thrilling trek to the breathtaking Himalayan landscapes. Experience the serenity of nature and challenge yourself with moderate trekking routes",
//         destinations: "Manali, Rohtang Pass, Solang Valley",
//         availableDates: [
//       new Date('2025-03-01'),
//       new Date('2025-04-10'),
//       new Date('2025-05-15')
        
//     ]
//     }]
//     for(const pkg of packageData){
//         const existingPackage=await Package.findOne({name : pkg.name})
//         if(!existingPackage){
//             await Package.insertOne(pkg)
//         }
//     }
// }

const insertAdmin=async()=>{
    console.log("check if insert is called")
    if(await User.findOne({role : "admin"})){
        return
    }
    else{
const adminUser = new User({
    name: "Admin",
    email: "admin@example.com",
    password: "adminsS@t9",
    role: "admin"
  })
  await adminUser.save()
    }
}

mongoose.connect(url).then(()=>{
    console.log("Connection successful")
    app.listen(8000);
    insertAdmin()
    // setInitialPackageData();
}).catch(err=>{
    console.log('Mongoose connect err', err)
})
