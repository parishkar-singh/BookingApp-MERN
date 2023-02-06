import Express from "express"
import {verifyAdmin} from "../utils/verifyToken.js";
import {CreateMovie} from "../controllers/movie.js";
const router = Express.Router();
// adding a new hotel
router.post("/" ,CreateMovie)
export default router

