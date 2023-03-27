import Express from "express"
import {verifyAdmin} from "../utils/verifyToken.js";
import {createRoom, deleteRoom, getOneRoom, getRooms, putRoom, updateRoomAvailability} from "../controllers/room.js";
// get hotels list
const router = Express.Router();
// get rooms list
router.get("/", getRooms)
// get rooms
router.get("/:id", getOneRoom)
// adding a new rooms
router.post("/:hotelid",verifyAdmin, createRoom)
// updating the rooms
// router.put("/:id", verifyAdmin,putRoom)
router.put('/availability/:id',updateRoomAvailability)
// deleting the rooms
router.delete("/:id/:hotelID", verifyAdmin,deleteRoom)
export default router

