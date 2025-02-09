import express, { json } from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import path from 'path'
import productRoutes from "./routes/product.route.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const __dirname =path.resolve()

app.use(express.json()) //Allow us to accept JSON data in the req.body
//For creating we will use POST method 

app.use("/api/products",productRoutes)

// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname,'/Frontend/dist')))

//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'Frontend','dsit','index.html'))
//     })
// }

// console.log(process.env.MONGO_URI)
app.listen(PORT, () => {
    connectDB()
    console.log("Server connected to:"+PORT)
})