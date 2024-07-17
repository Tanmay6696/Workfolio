import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //file system

cloudinary.config({ 
    cloud_name: process.env.cloudinary_cloud_name, 
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret // Click 'View Credentials' below to copy your API secret
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