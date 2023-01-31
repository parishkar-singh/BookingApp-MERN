import User from "../models/User.js";

export const getUsers = async (req, res,next) => {
    try {
        const getUser = await User.find()
        res.status(200).json(getUser)
    } catch (e) {
        // res.status(500).json(e)
        next(e)
    }
}
export const getOneUsers = async (req, res,next) => {
    try {
        const getUser = await User.findOne(req.params.id)
        res.status(200).json(getUser)
    } catch (e) {
        // res.status(500).json(e)
        next(e)
    }
}
export const createUser = async (req, res, next) => {
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const putUsers = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updateUser)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const deleteUsers = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
    } catch (e) {
        res.status(500).json(e)
    }
}
