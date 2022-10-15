import mongoose from "mongoose";
const addEvent =new mongoose.Schema(
    {
       quizQuestion:{
        type:String,
        required: true
       },
       quizOption1:{
        type:String,
        required: true
       },
       quizOption2:{
        type:String,
        required: true
       },
       quizOption3:{
        type:String,
        required: true
       },
       quizOption4:{
        type:String,
        required: true
       },
       quizAnswer:{
        type:String,
        required: true
       }
    },
    { timestamps: true }
)
 export const AddEventModel = new mongoose.model("addEvent",addEvent);