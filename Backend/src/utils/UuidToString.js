import mongoose from "mongoose";

const UuidToString = async (myid) => {
    try {
        const buffer = Buffer.from(myid.replace(/-/g, ''), 'hex');    
    // Check that the buffer is 16 bytes
    if (buffer.length !== 16) {
        throw new Error('Invalid UUID length');
    }    
    // Create a new ObjectId from the buffer and convert to hex string
    const hexString = buffer.toString('hex').slice(0, 24); 
    const hex = hexString.toString();
    console.log(hexString,"in uuidutil");
    return hexString;
    } catch (error) {
        console.log(error);
        console.log("data error in catch");
        throw error;
    }
};

export {UuidToString}