import Express from "express"
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotels,
    getHotels,
    getOneHotels,
    putHotels
} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = Express.Router();
// get hotels list
router.get("/", getHotels)
// get hotel
router.get("/find/:id", getOneHotels)
// adding a new hotel
router.post("/",verifyAdmin, createHotel)
// updating the Hotel
router.put("/update/:id", verifyAdmin,putHotels)
// deleting the Document
router.delete("/delete/:id", verifyAdmin,deleteHotels)
//
router.get("/countByCity",countByCity)
router.get('/countByType',countByType)
export default router

