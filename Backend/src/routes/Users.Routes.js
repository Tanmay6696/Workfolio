import {Router} from "express";
const router=Router();
import { verifedJWT } from "../middlewares/Auth.middlewares.js";
import {RegisteredUser,LoginUser,logout, updateUserSummary,addUserExperience,updateRating,addUserEducation,addUserAwards,addUserProject,unlikeUser,addUserCodingProfiles,updateUserEducation,updateUserExperience,addUserSkills,deleteUserCodingprofiles,addUserAchievements,deleteUserAchievements,deleteUserEducation, updateUserSkills,updateUserAwards,updateUserAchievements,updateUserSocialMedia,deleteUserSocialMedia,updateUserProjects,deleteUserProjects,updateUserCodingprofiles, deleteUserSkills, deleteUserSummary,deleteUserExperience,deleteUserAwards, Details,addUserSocialMedia,updateLike, updateComment} from "../controllers/Users.Controllers.js"
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
router.route("/getdetails").get(Details);
router.route("/login").post(LoginUser);
router.route("/logout").post(verifedJWT,logout);
router.route("/summaryupdate").post(verifedJWT,updateUserSummary);
router.route("/:email/likesupdate").post(verifedJWT,updateLike);
router.route("/:email/unlikeuser").post(verifedJWT,unlikeUser);
router.route("/:email/ratingupdate").post(verifedJWT,updateRating);
router.route("/:email/commentsupdate").post(verifedJWT,updateComment);
router.route("/summarydelete").post(verifedJWT,deleteUserSummary);
router.route("/:email/addexperience").post(verifedJWT,addUserExperience);
router.route("/:email/Experienceupdate").post(verifedJWT,updateUserExperience);
router.route("/experiencedelete").post(verifedJWT,deleteUserExperience);
router.route("/:email/addeducation").post(verifedJWT,addUserEducation);
router.route("/:email/educationupdate").post(verifedJWT,updateUserEducation);
router.route("/:email/educationdelete").post(verifedJWT,deleteUserEducation);
router.route("/:email/addaward").post(verifedJWT,addUserAwards);
router.route("/:email/awardsupdate").post(verifedJWT,updateUserAwards); 
router.route("/:email/awardsdelete").post(verifedJWT,deleteUserAwards); 
router.route("/:email/addsocialmedia").post(verifedJWT,addUserSocialMedia)
router.route("/:email/socialmediaupdate").post(verifedJWT,updateUserSocialMedia);
router.route("/:email/socialmediadelete").post(verifedJWT,deleteUserSocialMedia);
router.route("/:email/addproject").post(verifedJWT,addUserProject);
router.route("/:email/projectsupdate").post(verifedJWT,updateUserProjects); 
router.route("/:email/projectsdelete").post(verifedJWT,deleteUserProjects);
router.route("/:email/addachievement").post(verifedJWT,addUserAchievements);
router.route("/:email/achievementsupdate").post(verifedJWT,updateUserAchievements);
router.route("/:email/achievementsdelete").post(verifedJWT,deleteUserAchievements);
router.route("/:email/addcodingprofile").post(verifedJWT,addUserCodingProfiles);
router.route("/:email/codingprofileupdate").post(verifedJWT,updateUserCodingprofiles);
router.route("/:email/codingprofiledelete").post(verifedJWT,deleteUserCodingprofiles);
router.route("/:email/addskill").post(verifedJWT,addUserSkills);
router.route("/skillsupdate").post(verifedJWT,updateUserSkills);
router.route("/skillsdelete").post(verifedJWT,deleteUserSkills);

export default router;