import Movie from "../models/Movie.js";

export const CreateMovie = async (req, res, next) => {
    const newMovie = new Movie(req.body)
    try {
        const savedMovie = await newMovie.save()
        res.status(200).json(newMovie)
    } catch (e) {
        res.status(500).json(e)
    }
}
