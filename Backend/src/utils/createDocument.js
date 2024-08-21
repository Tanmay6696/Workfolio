import mongoose from "mongoose";

const createDocument = async (Model, createData) => {
    try {
        const document = new Model(createData);
        console.log("data error" ,document);
        await document.save();
        console.log("data error  22");
        return document;
    } catch (error) {
        console.log(error);
        console.log("data error in catch");
        throw error;
    }
};

export {createDocument}