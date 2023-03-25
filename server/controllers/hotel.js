import Hotel from "../models/Hotel.js";

export const getHotels = async (req, res,next) => {
    try {
        const getHotel = await Hotel.find()
        res.status(200).json(getHotel)
    } catch (e) {
        // res.status(500).json(e)
        next(e)
    }
}
export const getOneHotels = async (req, res,next) => {
    try {
        const getHotel = await Hotel.findOne(req.params.id)
        res.status(200).json(getHotel)
    } catch (e) {
        // res.status(500).json(e)
        next(e)
    }
}
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const putHotels = async (req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updateHotel)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const deleteHotels = async (req, res) => {
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.send(200).json('hotel has been deleted')
    } catch (e) {
        res.status(500).json(e)
    }
}
export const countByCity=async (req,res,next)=>{
    const cities=req.query.cities.split(',')
    try{
    const list=await Promise.all(cities.map(city=>{
        return Hotel.countDocuments({city:city})
    }))
    }catch (error){
        next(error)
    }
}