import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //file system

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    // Click 'View Credentials' below to copy your API secret
});
const uploadoncloudinary=async(localfilepath) =>{
    try{
        if(!localfilepath) return null;
        //upload on file path 
         const response =await cloudinary.uploader.upload(localfilepath, {
               resource_type:"auto"
           })
           console.log("uploadedsuccesfully", response.url);
           if(response.url) 
       return response;
    
    
    }
    catch(error){
        fs.unlinkSync(localfilepath)
        return null;
    }
}
export {uploadoncloudinary}