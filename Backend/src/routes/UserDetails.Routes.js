import {Router} from "express";
const router=Router();
import { verifedJWT } from "../middlewares/Auth.middlewares.js";
import {Showuserdeatils} from "../controllers/UserDetails.Controllers.js"

router.route("/:email/Userdetails").post(verifedJWT,Showuserdeatils);

export default router;