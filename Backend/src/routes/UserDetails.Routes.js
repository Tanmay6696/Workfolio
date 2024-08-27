import {Router} from "express";
const router=Router();
import { verifedJWT } from "../middlewares/Auth.middlewares.js";
import {Showuserdeatils ,GetOtherUserDetails} from "../controllers/UserDetails.Controllers.js"

router.route("/:email/Userdetails").post(verifedJWT,Showuserdeatils);
router.route("/getotherUserdetails").get(GetOtherUserDetails);


export default router;