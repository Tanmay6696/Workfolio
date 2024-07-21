import {Router} from "express";
const router=Router();
import { verifedJWT } from "../middlewares/Auth.middlewares.js";
import {RegisteredUser,LoginUser,logout, updateUserSummary,updateUserEducation,updateUserExperience,deleteUserCodingprofiles,deleteUserAchievements,deleteUserEducation, updateUserSkills,updateUserAwards,updateUserAchievements,updateUserSocialMedia,deleteUserSocialMedia,updateUserProjects,deleteUserProjects,updateUserCodingprofiles, deleteUserSkills, deleteUserSummary,deleteUserExperience,deleteUserAwards} from "../controllers/Users.Controllers.js"
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
router.route("/summaryupdate").post(verifedJWT,updateUserSummary);
router.route("/summarydelete").post(verifedJWT,deleteUserSummary);
router.route("/:email/Experienceupdate").post(verifedJWT,updateUserExperience);
router.route("/experiencedelete").post(verifedJWT,deleteUserExperience);
router.route("/:email/educationupdate").post(verifedJWT,updateUserEducation);
router.route("/:email/educationdelete").post(verifedJWT,deleteUserEducation);
router.route("/:email/awardsupdate").post(verifedJWT,updateUserAwards); 
router.route("/:email/awardsdelete").post(verifedJWT,deleteUserAwards); 
router.route("/:email/socialmediaupdate").post(verifedJWT,updateUserSocialMedia);
router.route("/:email/socialmediadelete").post(verifedJWT,deleteUserSocialMedia);
router.route("/:email/projectsupdate").post(verifedJWT,updateUserProjects); 
router.route("/:email/projectsdelete").post(verifedJWT,deleteUserProjects);
router.route("/:email/achievementsupdate").post(verifedJWT,updateUserAchievements);
router.route("/:email/achievementsdelete").post(verifedJWT,deleteUserAchievements);
router.route("/:email/codingprofileupdate").post(verifedJWT,updateUserCodingprofiles);
router.route("/:email/codingprofiledelete").post(verifedJWT,deleteUserCodingprofiles);
router.route("/skillsupdate").post(verifedJWT,updateUserSkills);
router.route("/skillsdelete").post(verifedJWT,deleteUserSkills);

export default router;