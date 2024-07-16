import {Router} from "express";
const router=Router();
import {RegisteredUser} from "../controllers/Users.Controllers.js"
router.route("/RegisterUser").post(
    // upload.fields([
    //     {
    //         name:'profileImage',
    //         maxCount:1
    //     },
    //     {
    //         name:'IntroVideo',
    //         maxCount:1
    //     }
    // ]),
    RegisteredUser
);
// router.route("/Login").post(LoginUser);
// router.route("/Logout").post(LogoutUser);
export default router;