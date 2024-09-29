import mongoose from "mongoose";


const projectsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    updatedAt:{
        type:Date,
        required:true
    },
});

export default mongoose.models.Projects || mongoose.model("Projects", projectsSchema);