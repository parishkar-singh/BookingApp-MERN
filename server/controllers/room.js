import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const getOneRoom = async (req, res, next) => {
    try {
        const getRoom = await Room.findOne(req.params.id)
        res.status(200).json(getRoom)
    } catch (e) {
        // res.status(500).json(e)
        // next(e)
        res.status(500).json(e)
    }
}
export const getRooms = async (req, res, next) => {
    try {
        const getRoomsList = await Room.find()
        res.status(200).json(getRoomsList)
    } catch (e) {
        // next(e)
        res.status(500).json(e)
    }
}
export const createRoom = async (req, res, next) => {
    const hotelID = req.params.hotelid;
    const newRoom = new Room(req.body)
    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelID, {$push: {rooms: savedRoom._id}})
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (err) {
        // next(err)
        res.status(500).json(err)
    }
}
export const putRoom = async (req, res) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updateRoom)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const deleteRoom = async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(req.params.hotelID, {$pull: {rooms: req.params.id}})
        } catch (err) {
            res.status(200).json(err)
        }
        res.send(200).json('room has been deleted')
    } catch (e) {
        res.status(500).json(e)
    }
}
