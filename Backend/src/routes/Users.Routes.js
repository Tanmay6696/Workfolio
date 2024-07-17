import {Router} from "express";
const router=Router();
import {RegisteredUser} from "../controllers/Users.Controllers.js"
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
// router.route("/Login").post(LoginUser);
// router.route("/Logout").post(LogoutUser);
export default router;