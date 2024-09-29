import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    resumeFile:{
        type:String,
        required:true
    },
});

export default mongoose.models.Profile || mongoose.model("Profile", profileSchema);