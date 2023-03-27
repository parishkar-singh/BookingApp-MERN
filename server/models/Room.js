import mongoose from 'mongoose';
import Room from "./Room.js";

const RoomSchema = new mongoose.Schema({
    title:
        {
            type: String,
            require: true,
            // unique: true
        },
    price:
        {
            type: Number,
            require: true,
            unique: true
        },
    desc:
        {
            type: String,
            required: true
        },
    maxPeople:
        {
            type: Number,
            required: true
        },
    roomNumbers: [{number: Number, unavailableDate: [{type: [Date]}]}],

}, {timestamps: true})

export default mongoose.model("Room", RoomSchema)
