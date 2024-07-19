import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt from 'jsonwebtoken';
import { User } from "../Models/User.Models.js";
import { APiError } from "../utils/ApiError.js";
export const verifedJWT = AsyncHandler(async (req, res, next) => {
    try {
        const Token = req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer", " ")
        if (!Token) {
            throw new APiError(401, "Unauthorized error")
        }
        const decodedinfo = await jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedinfo?._id).select("-passwoed -refreshtoken")
        if (!user) {

            //frontend discussion 
            throw new APiError(400, "Invalid Access token")
        }
        req.user = user;
        next()
    }
    catch (err) {
        throw new APiError(401, err?.message || "Invalid")
    }

})