import Express from "express"
import {createUser, deleteUsers, getOneUsers, getUsers, putUsers} from "../controllers/user.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = Express.Router();
//
// router.get('/checkAuthentication/:id', verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in ")
// })
// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in ")
// })
// router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
//     res.send("welcome admin")
// })
// get Users list
router.get("/", getUsers)
// get specific user id
router.get("/:id",getOneUsers)
// adding a new User
router.post("/", verifyUser,createUser)
// updating the User
router.put("/:id", verifyUser,putUsers)
// deleting the Document
router.delete("/:id", verifyUser,deleteUsers)
export default router

