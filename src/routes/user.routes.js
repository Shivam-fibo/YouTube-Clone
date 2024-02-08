import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
//middlwares
import {upload} from '../middlewares/multer.middlewares.js'

const router = Router()

router.route("/register").post(
    // injection of middleares
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount:1
        }
    ]),
    registerUser
    )
export default router