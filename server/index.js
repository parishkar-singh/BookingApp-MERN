import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import cookieParser from "cookie-parser";
import cors from 'cors';

mongoose.set("strictQuery", false);
const app = Express()
app.use(cors())
dotenv.config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to database")
    } catch (error) {
        console.log('Database Error')
    }
}

// mongoose.connection.on("disconnected", () => {
//     console.log("database is disconnected")
// })

// middlewares
app.use(Express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})
// end of middlewares
const  PORT=8080;
app.listen(PORT, () => {

    console.log("Express server up and running @",PORT)
    connect()
})

app.get("/", (req, res) => {
    res.send('hello this is my first request')
})


