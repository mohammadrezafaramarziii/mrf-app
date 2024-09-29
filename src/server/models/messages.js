import mongoose from "mongoose";


const messagesSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    sendAt:{
        type:Date,
        required:true
    },
});

export default mongoose.models.Messages || mongoose.model("Messages", messagesSchema);