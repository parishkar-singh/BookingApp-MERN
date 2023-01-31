import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {createError} from "../utils/error.js";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.status(200).send(newUser)
    } catch (e) {
        next(e)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({"username": req.body.username})
        // console.log({"username": req.body.username})
        if (!user)
            return next(createError(404, "No user found ;)"))

        const isPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isPassword)
            return next(createError(400, 'wrong password and user combo'))
        const {password, isAdmin, ...otherDetails} = user._doc;
        const token = jwt.sign({id: user.__id, isAdmin: user.isAdmin}, process.env.JWT)

        res.cookie("access_token", token, {httpOnly:true,}).status(200).json({'status': 'User has been logged in ', ...otherDetails})
    } catch (e) {
        next(e)
    }
}
export const forget = async (req, res, next) => {
    try {
        const user = await User.findOne({"username": req.body.username})
        if (!user)
            return next(createError(404, 'no user found by this name '))

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.status(200).send(newUser)
    } catch (e) {
        next(e)
    }
}
