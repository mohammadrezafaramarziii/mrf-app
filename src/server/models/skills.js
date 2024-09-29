import mongoose from "mongoose";


const skillsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
});

export default mongoose.models.Skills || mongoose.model("Skills", skillsSchema);