import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt from 'jsonwebtoken';
import { User } from "../Models/User.Models.js";
import { APiError } from "../utils/ApiError.js";
export const verifedJWT = AsyncHandler(async (req, res, next) => {
    console.log("verifedJWT");
    try {
        
        const Token = req.headers?.accesstoken|| req.cookies?.accessToken || req.headers.authorization.split(" ")[1];
        

        if (!Token) {
            throw new APiError(401, "Unauthorized error")
        }
        

        const decodedToken = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);
        // console.log("decodedToken",decodedToken);
        
        const user = await User.findById(decodedToken?._id).select("-password -refreshtoken")
        // console.log("user",user);
        const users = await User.findById(decodedToken?._id);
        // console.log("users",users);
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