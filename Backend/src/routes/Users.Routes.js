import {Router} from "express";
const router=Router();
import { verifedJWT } from "../middlewares/Auth.middlewares.js";
import {RegisteredUser,LoginUser,logout, updateUserSummary,updateUserEducation,updateUserExperience, updateUserSkills,updateUserAwards,updateUserAchievements,updateUserSocialMedia,updateUserProjects,updateUserCodingprofiles} from "../controllers/Users.Controllers.js"
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
router.route("/summary").post(verifedJWT,updateUserSummary);
router.route("/:email/Experienceupdate").post(verifedJWT,updateUserExperience);
router.route("/:email/educationupdate").post(verifedJWT,updateUserEducation);
router.route("/:email/awardsupdate").post(verifedJWT,updateUserAwards); 
router.route("/:email/socialmediaupdate").post(verifedJWT,updateUserSocialMedia); 
router.route("/:email/projectsupdate").post(verifedJWT,updateUserProjects); 
router.route("/:email/achievementsupdate").post(verifedJWT,updateUserAchievements);
router.route("/:email/codingprofileupdate").post(verifedJWT,updateUserCodingprofiles);

router.route("/skillsupdate").post(verifedJWT,updateUserSkills);

export default router;