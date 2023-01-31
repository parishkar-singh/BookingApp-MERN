import Express from "express"
import {createHotel, deleteHotels, getHotels, getOneHotels, putHotels} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = Express.Router();
// get hotels list
router.get("/", getHotels)
// get hotel
router.get("/:id", getOneHotels)
// adding a new hotel
router.post("/",verifyAdmin, createHotel)
// updating the Hotel
router.put("/:id", verifyAdmin,putHotels)
// deleting the Document
router.delete("/:id", verifyAdmin,deleteHotels)
export default router
