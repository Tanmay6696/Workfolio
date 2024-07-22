import mongoose from "mongoose";

const createDocument = async (Model, createData) => {
    try {
        const document = new Model(createData);
        await document.save();
        return document;
    } catch (error) {
        throw error;
    }
};

export {createDocument}