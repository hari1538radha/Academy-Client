import mongoose from "mongoose";
const imagesSchema  = new mongoose.Schema({
 
    Images :
    {
        type: String
        

    }
   
})

export const ImageModel = new mongoose.model("imagedata",imagesSchema) 
