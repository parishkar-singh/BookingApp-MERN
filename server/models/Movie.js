import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    releaseDate: {
        type: Date,
        require: true
    },
    genres: {
        type: [String],
        require:true
    },
    desc:
        {
            type: String,
            required: true
        },
    rating:
        {
            type: Number,
            min: 0,
            max: 10
        },
    cast: [{
        name: String,
        role: String
    }],

})
export default mongoose.model("Movie", MovieSchema)
