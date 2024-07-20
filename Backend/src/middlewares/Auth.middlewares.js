import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt from 'jsonwebtoken';
import { User } from "../Models/User.Models.js";
import { APiError } from "../utils/ApiError.js";
export const verifedJWT = AsyncHandler(async (req, res, next) => {
    console.log("verifedJWT");
    try {
        const Token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", " ")
        // console.log("Token ",Token);
        // console.log("req.headerAuthorization  ",req.header("Authorization"));
        // console.log("req.user?._id",req.user?._id);
        if (!Token) {
            throw new APiError(401, "Unauthorized error")
        }
        console.log(Token,"   ",process.env.ACCESS_TOKEN_SECRET);

        const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET)
        console.log("decodedToken",decodedToken);
        const user = await User.findById(decodedToken?._id).select("-passwoed -refreshtoken")
        console.log("2");
        if (!user) {

            //frontend discussion 
            throw new APiError(400, "Invalid Access token")
        }
        req.user = user;
        next()
    }
    catch (err) {
        console.log(" err verifedJWT");
        throw new APiError(401, err?.message || "Invalid")
    }

})