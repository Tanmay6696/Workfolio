import {Router} from "express";
const router=Router();
import { verifedJWT } from "../middlewares/Auth.middlewares.js";
import {RegisteredUser,LoginUser,logout, updateUserSummary} from "../controllers/Users.Controllers.js"
import {upload} from '../middlewares/multer.middleware.js'
router.route("/RegisterUser").post(
    upload.fields([
        {
            name:'profilePicture',
            maxCount:1
        },{
            name:'resume',
            maxCount:1
        },{
            name:'introVideo',
            maxCount:1
        }
    ]),
    RegisteredUser
);
router.route("/login").post(LoginUser);
router.route("/logout").post(verifedJWT,logout);
router.route("/summary").post(updateUserSummary);
export default router;