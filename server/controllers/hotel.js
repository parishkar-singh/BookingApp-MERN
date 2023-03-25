import Hotel from "../models/Hotel.js";
import hotels from "../routes/hotels.js";
import hotel from "../models/Hotel.js";

export const getHotels = async (req, res, next) => {
    const {min,max,...other}=req.query
    try {
        const Hotels = await Hotel.find({
            ...other,
            cheapest: {$gt: min|1, $lt: max||99999}
        }).limit(parseInt(req.query.limit))
        res.status(200).json(Hotels)
    } catch (e) {
        // res.status(500).json(e)
        next(e)
    }
}
export const getOneHotels = async (req, res, next) => {
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
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city: city})
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}
export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({type: "hotel"})
        const villaCount = await Hotel.countDocuments({type: "villa"})
        const resortCount = await Hotel.countDocuments({type: "resort"})
        const cabinCount = await Hotel.countDocuments({type: "cabin"})
        const apartmentCount = await Hotel.countDocuments({type: "apartment"})

        res.status(200).json([{type: "hotel", count: hotelCount}, {type: "apartment", count: apartmentCount}, {type: "villa",count:villaCount}, {type: "resort", count: resortCount}, {type: "cabin",count:cabinCount}])
    } catch (error) {
        next(error)
    }
}

